import init, { Numbat, FormatType } from 'numbat-wasm'
import { registerSW } from 'virtual:pwa-register'

// Keep --vh in sync with the visible viewport so the layout shrinks correctly
// when the mobile keyboard opens. visualViewport is more reliable than dvh on
// iOS Safari and older Android browsers.
function syncViewportHeight(): void {
  const h = window.visualViewport ? window.visualViewport.height : window.innerHeight
  document.documentElement.style.setProperty('--vh', `${h}px`)
  window.scrollTo(0, 0)
}
syncViewportHeight()
if (window.visualViewport) {
  window.visualViewport.addEventListener('resize', syncViewportHeight)
} else {
  window.addEventListener('resize', syncViewportHeight)
}

const output           = document.getElementById('output')!
const form             = document.getElementById('form') as HTMLFormElement
const input            = document.getElementById('input') as HTMLInputElement
const variablesList      = document.getElementById('variables-list')!
const tabsScroll         = document.getElementById('tabs-scroll')!
const sessionSelect      = document.getElementById('session-select') as HTMLSelectElement
const sidebarMiddle      = document.getElementById('sidebar-middle')!
const scriptsFileInput = document.getElementById('scripts-file-input') as HTMLInputElement

const LET_PATTERN          = /^let\s+([a-zA-Z_][a-zA-Z0-9_]*)/
const FN_PATTERN           = /^fn\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*(\([^)]*\))/
const SESSIONS_KEY         = 'calcite-sessions'
const MAX_UNNAMED_SESSIONS = 10

interface Session {
  id: number
  label: string
  named: boolean
  inputs: string[]
}

interface UnitEntry {
  symbol: string
  name: string
}

interface UnitCategory {
  name: string
  units: UnitEntry[]
}

interface DimensionCategory {
  name: string
  dimensions: string[]
}

const variables = new Set<string>()
const functions = new Map<string, string>()  // name → params string
let numbat!: Numbat
let exchangeRatesXml: string | null = null
let currentSession!: Session
let historyIndex = -1  // -1 = not navigating; 0 = most recent input
let historyDraft = ''  // saved input text before navigating

// ── HTML helpers ──────────────────────────────────────────────────────────────

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function stripJqueryTerminal(text: string): string {
  // jquery.terminal format: [[style]content] — strip markup, keep content
  let prev = ''
  while (prev !== text) {
    prev = text
    text = text.replace(/\[\[[^\]]*\]([\s\S]*?)\]/g, '$1')
  }
  return text
}

function formatCommandOutput(raw: string): string {
  // Numbat is initialised with FormatType.Html, so error output from commands
  // may already be HTML. Strip jquery.terminal markup but do not re-escape, as
  // doing so would double-encode any HTML tags in the output.
  return stripJqueryTerminal(raw).replace(/\n/g, '<br>')
}

function closeMobileSidebar(): void {
  document.getElementById('variables')!.classList.remove('mobile-open')
}

// ── Focus trap ────────────────────────────────────────────────────────────────

const FOCUSABLE_SELECTOR = 'button:not([disabled]),[href],input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])'

function trapFocus(e: KeyboardEvent, container: HTMLElement): void {
  const focusable = Array.from(container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR))
  if (focusable.length === 0) return
  const first = focusable[0]
  const last  = focusable[focusable.length - 1]
  if (e.shiftKey) {
    if (document.activeElement === first) { e.preventDefault(); last.focus() }
  } else {
    if (document.activeElement === last)  { e.preventDefault(); first.focus() }
  }
}

function makeInteractive(el: HTMLElement, handler: () => void): void {
  el.setAttribute('role', 'button')
  el.tabIndex = 0
  el.addEventListener('click', handler)
  el.addEventListener('keydown', (e: KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handler() }
  })
}

function insertIntoInput(text: string): void {
  const len   = input.value.length
  const focused = document.activeElement === input
  const start = focused ? (input.selectionStart ?? len) : len
  const end   = focused ? (input.selectionEnd   ?? len) : len
  input.setRangeText(text, start, end, 'end')
  input.focus()
}

function resetHistory(): void {
  historyIndex = -1
  historyDraft = ''
}

function appendEntry(query: string, result: string, isError: boolean): void {
  const entry = document.createElement('div')
  entry.className = 'entry' + (isError ? ' error' : '')

  const queryEl = document.createElement('div')
  queryEl.className = 'query'
  queryEl.textContent = query
  queryEl.title = 'Re-use this expression'
  makeInteractive(queryEl, () => insertIntoInput(query))

  const resultEl = document.createElement('div')
  resultEl.className = 'result'
  resultEl.innerHTML = result

  entry.appendChild(queryEl)
  entry.appendChild(resultEl)
  output.appendChild(entry)
  output.scrollTop = output.scrollHeight
}

// ── Variables sidebar ─────────────────────────────────────────────────────────

function updateVariables(): void {
  if (variables.size === 0) {
    variablesList.innerHTML = '<p class="no-vars">No variables yet</p>'
    return
  }
  variablesList.innerHTML = ''
  for (const name of variables) {
    try {
      const result = numbat.interpret(name)
      if (!result.is_error) {
        const item = document.createElement('div')
        item.className = 'var-item'
        item.title = `Insert "${name}"`
        makeInteractive(item, () => { insertIntoInput(name); closeMobileSidebar() })
        const nameEl = document.createElement('span')
        nameEl.className = 'var-name'
        nameEl.textContent = name
        const valueEl = document.createElement('span')
        valueEl.className = 'var-value'
        valueEl.innerHTML = result.output
        item.appendChild(nameEl)
        item.appendChild(valueEl)
        variablesList.appendChild(item)
      }
    } catch {
      // skip variables that fail to evaluate
    }
  }
}

// ── Functions sidebar ─────────────────────────────────────────────────────────

function updateFunctions(): void {
  const list = document.getElementById('functions-list')!
  if (functions.size === 0) {
    list.innerHTML = '<p class="no-vars">No functions yet</p>'
    return
  }
  list.innerHTML = ''
  for (const [name, params] of functions) {
    const item = document.createElement('div')
    item.className = 'fn-item'
    item.title = `Insert "${name}("`
    makeInteractive(item, () => { insertIntoInput(name + '('); hidePopup('functions-popup') })

    const nameEl = document.createElement('span')
    nameEl.className = 'fn-name'
    nameEl.textContent = name

    const paramsEl = document.createElement('span')
    paramsEl.className = 'fn-params'
    paramsEl.textContent = params

    item.appendChild(nameEl)
    item.appendChild(paramsEl)
    list.appendChild(item)
  }
}

// ── Scripts sidebar ───────────────────────────────────────────────────────────

function addScriptItem(name: string, fnCount: number, letCount: number, isError: boolean): void {
  const list = document.getElementById('scripts-list')!
  const placeholder = list.querySelector('.no-vars')
  if (placeholder) list.removeChild(placeholder)

  const item = document.createElement('div')
  item.className = 'script-item' + (isError ? ' error' : '')

  const nameEl = document.createElement('span')
  nameEl.className = 'script-name'
  nameEl.textContent = name

  const metaEl = document.createElement('span')
  metaEl.className = 'script-meta'
  if (isError) {
    metaEl.textContent = 'failed to load'
  } else {
    const parts: string[] = []
    if (fnCount  > 0) parts.push(`${fnCount} function${fnCount  !== 1 ? 's' : ''}`)
    if (letCount > 0) parts.push(`${letCount} variable${letCount !== 1 ? 's' : ''}`)
    metaEl.textContent = parts.length > 0 ? parts.join(', ') : 'loaded'
  }

  item.appendChild(nameEl)
  item.appendChild(metaEl)
  list.appendChild(item)
}

// ── Session storage ───────────────────────────────────────────────────────────

function loadSessions(): Session[] {
  try {
    return JSON.parse(localStorage.getItem(SESSIONS_KEY) ?? '[]') as Session[]
  } catch {
    return []
  }
}

function saveSessions(sessions: Session[]): void {
  localStorage.setItem(SESSIONS_KEY, JSON.stringify(sessions))
}

function createSession(): Session {
  return {
    id: Date.now(),
    label: new Date().toLocaleString('en-GB', {
      day: 'numeric', month: 'short',
      hour: '2-digit', minute: '2-digit',
    }),
    named: false,
    inputs: [],
  }
}

function saveCurrentSession(): void {
  const all = loadSessions()
  const idx = all.findIndex(s => s.id === currentSession.id)
  if (idx >= 0) {
    all[idx] = currentSession
  } else {
    all.unshift(currentSession)
  }
  // Prune unnamed sessions beyond the limit; named sessions are never pruned
  let unnamedCount = 0
  const pruned = all.filter(s => {
    if (s.named) return true
    unnamedCount++
    return unnamedCount <= MAX_UNNAMED_SESSIONS
  })
  saveSessions(pruned)
}

// ── Tab bar ───────────────────────────────────────────────────────────────────

function renderTabBar(): void {
  const all     = loadSessions()
  const ordered = [...all].reverse()  // oldest first (left-to-right, browser style)

  // Desktop: tab pills
  tabsScroll.innerHTML = ''
  tabsScroll.setAttribute('role', 'tablist')
  tabsScroll.setAttribute('aria-label', 'Sessions')
  for (const session of ordered) {
    const isCurrent = session.id === currentSession.id

    const tab = document.createElement('div')
    tab.className = 'tab' + (isCurrent ? ' active' : '') + (session.named ? ' named' : '')
    tab.setAttribute('role', 'tab')
    tab.setAttribute('aria-selected', isCurrent ? 'true' : 'false')
    tab.setAttribute('aria-controls', 'output')

    const label = document.createElement('span')
    label.className = 'tab-label'
    label.textContent = session.label
    if (!isCurrent) {
      label.tabIndex = 0
      label.addEventListener('click', () => replaySession(session.id))
      label.addEventListener('keydown', (e: KeyboardEvent) => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); replaySession(session.id) }
      })
    }
    label.addEventListener('dblclick', (e: MouseEvent) => {
      e.stopPropagation()
      startRename(session, label)
    })
    tab.appendChild(label)

    const close = document.createElement('button')
    close.className = 'tab-close'
    close.textContent = '×'
    close.title = 'Close session'
    close.addEventListener('click', (e: MouseEvent) => {
      e.stopPropagation()
      const all = loadSessions()
      const remaining = all.filter(s => s.id !== session.id)
      saveSessions(remaining)
      if (isCurrent) {
        // Mark as discarded so replaySession / startNewSession won't re-save it
        currentSession.inputs = []
        if (remaining.length > 0) {
          replaySession(remaining[0].id)
        } else {
          startNewSession()
        }
      } else {
        renderTabBar()
      }
    })
    tab.appendChild(close)

    tabsScroll.appendChild(tab)
  }

  // Scroll active tab into view
  const activeTab = tabsScroll.querySelector('.tab.active')
  if (activeTab) activeTab.scrollIntoView({ block: 'nearest', inline: 'nearest' })

  // Mobile: select dropdown
  sessionSelect.innerHTML = ''
  const named   = ordered.filter(s => s.named)
  const unnamed = ordered.filter(s => !s.named)

  function addOption(session: Session, parent: HTMLElement | HTMLSelectElement): void {
    const opt = document.createElement('option')
    opt.value = String(session.id)
    opt.textContent = session.label
    opt.selected = session.id === currentSession.id
    parent.appendChild(opt)
  }

  if (named.length > 0 && unnamed.length > 0) {
    const savedGroup = document.createElement('optgroup')
    savedGroup.label = 'Saved'
    named.forEach(s => addOption(s, savedGroup))
    sessionSelect.appendChild(savedGroup)

    const recentGroup = document.createElement('optgroup')
    recentGroup.label = 'Recent'
    unnamed.forEach(s => addOption(s, recentGroup))
    sessionSelect.appendChild(recentGroup)
  } else {
    ordered.forEach(s => addOption(s, sessionSelect))
  }
}

function startRename(session: Session, labelEl: HTMLSpanElement): void {
  const editor = document.createElement('input')
  editor.type = 'text'
  editor.className = 'tab-rename-input'
  editor.value = session.label

  labelEl.replaceWith(editor)
  editor.focus()
  editor.select()

  function commit(): void {
    const newName = editor.value.trim()
    if (newName && newName !== session.label) {
      session.label = newName
      session.named = true
      if (session.id === currentSession.id) currentSession = session
      const all = loadSessions()
      const idx = all.findIndex(s => s.id === session.id)
      if (idx >= 0) { all[idx] = session; saveSessions(all) }
    }
    renderTabBar()
  }

  editor.addEventListener('blur', commit)
  editor.addEventListener('keydown', (e: KeyboardEvent) => {
    if (e.key === 'Enter')  { e.preventDefault(); editor.blur() }
    if (e.key === 'Escape') { editor.value = session.label; editor.blur() }
  })
}

function startNewSession(): void {
  if (currentSession) {
    if (currentSession.inputs.length === 0) {
      saveSessions(loadSessions().filter(s => s.id !== currentSession.id))
    } else {
      saveCurrentSession()
    }
  }

  initNumbat()
  variables.clear()
  functions.clear()
  output.innerHTML = ''
  updateVariables()
  updateFunctions()

  currentSession = createSession()
  saveCurrentSession()
  renderTabBar()

  resetHistory()
  input.value = ''
  input.focus()
}

// ── Replay ────────────────────────────────────────────────────────────────────

async function replaySession(sessionId: number): Promise<void> {
  // Re-fetch from storage to avoid using a stale snapshot
  const all = loadSessions()
  const session = all.find(s => s.id === sessionId)
  if (!session) return

  // Discard current session if empty, otherwise persist it
  if (currentSession) {
    if (currentSession.inputs.length === 0) {
      saveSessions(loadSessions().filter(s => s.id !== currentSession.id))
    } else {
      saveCurrentSession()
    }
  }

  initNumbat()
  variables.clear()
  functions.clear()
  output.innerHTML = ''

  currentSession = session
  resetHistory()
  renderTabBar()

  for (const query of session.inputs) {
    let result  = ''
    let isError = false
    try {
      const cmdResult = numbat.try_run_command(query)
      if (cmdResult.is_command) {
        if (cmdResult.should_reset) {
          output.innerHTML = ''
          variables.clear()
          functions.clear()
        } else if (cmdResult.should_clear) {
          output.innerHTML = ''
        } else {
          result = formatCommandOutput(cmdResult.output ?? '(command executed)')
        }
      } else {
        const interpreterOutput = numbat.interpret(query)
        result  = interpreterOutput.output
        isError = interpreterOutput.is_error
        if (!isError) {
          for (const m of query.matchAll(/^let\s+([a-zA-Z_][a-zA-Z0-9_]*)/gm)) variables.add(m[1])
          for (const m of query.matchAll(/^fn\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*(\([^)]*\))/gm)) functions.set(m[1], m[2])
        }
      }
    } catch (err) {
      result  = escapeHtml(err instanceof Error ? err.message : String(err))
      isError = true
    }
    if (result) appendEntry(query, result, isError)
  }

  updateVariables()
  updateFunctions()
  input.focus()
}

// ── Units section ─────────────────────────────────────────────────────────────

const UNIT_CATEGORIES: UnitCategory[] = [
  { name: 'Length', units: [
    { symbol: 'm',    name: 'metre' },
    { symbol: 'km',   name: 'kilometre' },
    { symbol: 'cm',   name: 'centimetre' },
    { symbol: 'mm',   name: 'millimetre' },
    { symbol: 'μm',   name: 'micrometre' },
    { symbol: 'nm',   name: 'nanometre' },
    { symbol: 'ft',   name: 'foot' },
    { symbol: 'in',   name: 'inch' },
    { symbol: 'yd',   name: 'yard' },
    { symbol: 'mi',   name: 'mile' },
    { symbol: 'nmi',  name: 'nautical mile' },
    { symbol: 'ly',   name: 'light year' },
    { symbol: 'AU',   name: 'astronomical unit' },
    { symbol: 'pc',   name: 'parsec' },
  ]},
  { name: 'Mass', units: [
    { symbol: 'kg',   name: 'kilogram' },
    { symbol: 'g',    name: 'gram' },
    { symbol: 'mg',   name: 'milligram' },
    { symbol: 'μg',   name: 'microgram' },
    { symbol: 't',    name: 'metric tonne' },
    { symbol: 'lb',   name: 'pound' },
    { symbol: 'oz',   name: 'ounce' },
    { symbol: 'st',   name: 'stone' },
  ]},
  { name: 'Time', units: [
    { symbol: 's',     name: 'second' },
    { symbol: 'ms',    name: 'millisecond' },
    { symbol: 'μs',    name: 'microsecond' },
    { symbol: 'ns',    name: 'nanosecond' },
    { symbol: 'min',   name: 'minute' },
    { symbol: 'h',     name: 'hour' },
    { symbol: 'day',   name: 'day' },
    { symbol: 'week',  name: 'week' },
    { symbol: 'month', name: 'month' },
    { symbol: 'year',  name: 'year' },
  ]},
  { name: 'Temperature', units: [
    { symbol: 'K',          name: 'kelvin' },
    { symbol: 'celsius',    name: 'degrees Celsius (°C)' },
    { symbol: 'fahrenheit', name: 'degrees Fahrenheit (°F)' },
  ]},
  { name: 'Area', units: [
    { symbol: 'm²',   name: 'square metre' },
    { symbol: 'km²',  name: 'square kilometre' },
    { symbol: 'cm²',  name: 'square centimetre' },
    { symbol: 'ft²',  name: 'square foot' },
    { symbol: 'in²',  name: 'square inch' },
    { symbol: 'ha',   name: 'hectare' },
    { symbol: 'acre', name: 'acre' },
  ]},
  { name: 'Volume', units: [
    { symbol: 'm³',   name: 'cubic metre' },
    { symbol: 'L',    name: 'litre' },
    { symbol: 'mL',   name: 'millilitre' },
    { symbol: 'μL',   name: 'microlitre' },
    { symbol: 'gal',  name: 'gallon' },
    { symbol: 'qt',   name: 'quart' },
    { symbol: 'pt',   name: 'pint' },
    { symbol: 'cup',  name: 'cup' },
    { symbol: 'floz', name: 'fluid ounce' },
  ]},
  { name: 'Speed', units: [
    { symbol: 'km/h', name: 'kilometre per hour' },
    { symbol: 'mph',  name: 'mile per hour' },
    { symbol: 'knot', name: 'knot' },
    { symbol: 'c',    name: 'speed of light' },
  ]},
  { name: 'Force', units: [
    { symbol: 'N',    name: 'newton' },
    { symbol: 'kN',   name: 'kilonewton' },
    { symbol: 'MN',   name: 'meganewton' },
    { symbol: 'lbf',  name: 'pound-force' },
  ]},
  { name: 'Energy', units: [
    { symbol: 'J',    name: 'joule' },
    { symbol: 'kJ',   name: 'kilojoule' },
    { symbol: 'MJ',   name: 'megajoule' },
    { symbol: 'cal',  name: 'calorie' },
    { symbol: 'kcal', name: 'kilocalorie' },
    { symbol: 'Wh',   name: 'watt-hour' },
    { symbol: 'kWh',  name: 'kilowatt-hour' },
    { symbol: 'eV',   name: 'electronvolt' },
    { symbol: 'BTU',  name: 'British thermal unit' },
  ]},
  { name: 'Power', units: [
    { symbol: 'mW',   name: 'milliwatt' },
    { symbol: 'W',    name: 'watt' },
    { symbol: 'kW',   name: 'kilowatt' },
    { symbol: 'MW',   name: 'megawatt' },
    { symbol: 'GW',   name: 'gigawatt' },
    { symbol: 'hp',   name: 'horsepower' },
  ]},
  { name: 'Pressure', units: [
    { symbol: 'Pa',   name: 'pascal' },
    { symbol: 'kPa',  name: 'kilopascal' },
    { symbol: 'MPa',  name: 'megapascal' },
    { symbol: 'bar',  name: 'bar' },
    { symbol: 'mbar', name: 'millibar' },
    { symbol: 'atm',  name: 'atmosphere' },
    { symbol: 'psi',  name: 'pounds per square inch' },
    { symbol: 'mmHg', name: 'millimetre of mercury' },
  ]},
  { name: 'Electrical', units: [
    { symbol: 'V',   name: 'volt' },
    { symbol: 'mV',  name: 'millivolt' },
    { symbol: 'kV',  name: 'kilovolt' },
    { symbol: 'A',   name: 'ampere' },
    { symbol: 'mA',  name: 'milliampere' },
    { symbol: 'Ω',   name: 'ohm' },
    { symbol: 'kΩ',  name: 'kiloohm' },
    { symbol: 'MΩ',  name: 'megaohm' },
    { symbol: 'F',   name: 'farad' },
    { symbol: 'μF',  name: 'microfarad' },
    { symbol: 'nF',  name: 'nanofarad' },
    { symbol: 'H',   name: 'henry' },
    { symbol: 'T',   name: 'tesla' },
    { symbol: 'C',   name: 'coulomb' },
  ]},
  { name: 'Digital', units: [
    { symbol: 'bit', name: 'bit' },
    { symbol: 'B',   name: 'byte' },
    { symbol: 'kB',  name: 'kilobyte' },
    { symbol: 'MB',  name: 'megabyte' },
    { symbol: 'GB',  name: 'gigabyte' },
    { symbol: 'TB',  name: 'terabyte' },
    { symbol: 'KiB', name: 'kibibyte' },
    { symbol: 'MiB', name: 'mebibyte' },
    { symbol: 'GiB', name: 'gibibyte' },
    { symbol: 'TiB', name: 'tebibyte' },
  ]},
  { name: 'Frequency', units: [
    { symbol: 'Hz',  name: 'hertz' },
    { symbol: 'kHz', name: 'kilohertz' },
    { symbol: 'MHz', name: 'megahertz' },
    { symbol: 'GHz', name: 'gigahertz' },
    { symbol: 'THz', name: 'terahertz' },
    { symbol: 'rpm', name: 'revolutions per minute' },
  ]},
  { name: 'Angle', units: [
    { symbol: 'rad',    name: 'radian' },
    { symbol: 'degree', name: 'degree (°)' },
    { symbol: 'arcmin', name: 'arcminute' },
    { symbol: 'arcsec', name: 'arcsecond' },
  ]},
  { name: 'Luminosity', units: [
    { symbol: 'cd', name: 'candela' },
    { symbol: 'lm', name: 'lumen' },
    { symbol: 'lx', name: 'lux' },
  ]},
]

function buildUnitsSection(): void {
  const body = document.getElementById('units-section-body')!
  for (const category of UNIT_CATEGORIES) {
    const section = document.createElement('div')
    section.className = 'unit-category'

    const heading = document.createElement('h4')
    heading.textContent = category.name
    section.appendChild(heading)

    const chips = document.createElement('div')
    chips.className = 'unit-chips'
    for (const unit of category.units) {
      const chip = document.createElement('button')
      chip.type = 'button'
      chip.className = 'unit-chip'
      chip.textContent = unit.symbol
      chip.title = unit.name
      chip.addEventListener('click', () => { insertIntoInput(unit.symbol); hidePopup('units-popup') })
      chips.appendChild(chip)
    }
    section.appendChild(chips)
    body.appendChild(section)
  }
}

// ── Dimensions section ────────────────────────────────────────────────────────

const DIMENSION_CATEGORIES: DimensionCategory[] = [
  { name: 'Base', dimensions: [
    'Length',
    'Mass',
    'Time',
    'ElectricCurrent',
    'Temperature',
    'AmountOfSubstance',
    'LuminousIntensity',
  ]},
  { name: 'Geometry', dimensions: [
    'Area',
    'Volume',
    'Angle',
    'SolidAngle',
    'Wavenumber',
  ]},
  { name: 'Mechanics', dimensions: [
    'Velocity',
    'Acceleration',
    'Jerk',
    'Frequency',
    'Force',
    'Pressure',
    'Energy',
    'Power',
    'Momentum',
    'Torque',
    'Action',
    'SurfaceTension',
    'DynamicViscosity',
    'KinematicViscosity',
  ]},
  { name: 'Electricity & Magnetism', dimensions: [
    'ElectricCharge',
    'ElectricPotential',
    'ElectricResistance',
    'ElectricConductance',
    'ElectricCapacitance',
    'ElectricInductance',
    'MagneticFlux',
    'MagneticFluxDensity',
  ]},
  { name: 'Thermodynamics', dimensions: [
    'Entropy',
    'HeatCapacity',
    'SpecificHeatCapacity',
    'ThermalConductivity',
    'Irradiance',
  ]},
  { name: 'Light', dimensions: [
    'LuminousFlux',
    'Illuminance',
    'Luminance',
  ]},
  { name: 'Chemistry', dimensions: [
    'MolarMass',
    'MolarEnergy',
    'MolarHeatCapacity',
    'MolarConcentration',
    'MolarVolume',
    'CatalyticActivity',
  ]},
  { name: 'Radiation', dimensions: [
    'AbsorbedDose',
    'EquivalentDose',
    'Radioactivity',
  ]},
  { name: 'Other', dimensions: [
    'Density',
    'Information',
    'Money',
  ]},
]

function buildDimensionsSection(): void {
  const body = document.getElementById('dimensions-section-body')!
  for (const category of DIMENSION_CATEGORIES) {
    const section = document.createElement('div')
    section.className = 'unit-category'

    const heading = document.createElement('h4')
    heading.textContent = category.name
    section.appendChild(heading)

    const chips = document.createElement('div')
    chips.className = 'unit-chips'
    for (const dim of category.dimensions) {
      const chip = document.createElement('button')
      chip.type = 'button'
      chip.className = 'unit-chip'
      chip.textContent = dim
      chip.addEventListener('click', () => { insertIntoInput(dim); hidePopup('dimensions-popup') })
      chips.appendChild(chip)
    }
    section.appendChild(chips)
    body.appendChild(section)
  }
}

// ── Exchange rates ────────────────────────────────────────────────────────────

// Uses interpret-based definitions exclusively — set_exchange_rates can only be
// called once per WASM module lifetime and crashes on any subsequent call.
function applyExchangeRates(): void {
  if (!exchangeRatesXml) return
  const matches = [...exchangeRatesXml.matchAll(/currency='([A-Z]{3})'\s+rate='([0-9.]+)'/g)]
  for (const [, code, rate] of matches) {
    numbat.interpret(`unit ${code} : Money = (1 / ${rate}) EUR`)
  }
}

function initNumbat(): void {
  numbat = Numbat.new(true, true, FormatType.Html)
  applyExchangeRates()
}

const CURRENCY_SYMBOLS: Record<string, string> = {
  AUD: 'A$',  BGN: 'лв',  BRL: 'R$',  CAD: 'C$',  CHF: 'Fr',
  CNY: '¥',   CZK: 'Kč',  DKK: 'kr',  EUR: '€',   GBP: '£',
  HKD: 'HK$', HUF: 'Ft',  IDR: 'Rp',  ILS: '₪',   INR: '₹',
  ISK: 'kr',  JPY: '¥',   KRW: '₩',   MXN: '$',   MYR: 'RM',
  NOK: 'kr',  NZD: 'NZ$', PHP: '₱',   PLN: 'zł',  RON: 'lei',
  SEK: 'kr',  SGD: 'S$',  THB: '฿',   TRY: '₺',   USD: '$',
  ZAR: 'R',
}

function buildCurrencyChips(xml: string): void {
  const list = document.getElementById('currencies-list')!
  list.innerHTML = ''
  const codes = ['EUR', ...new Set([...xml.matchAll(/currency='([A-Z]{3})'/g)].map(m => m[1]))]
  codes.sort()
  const chips = document.createElement('div')
  chips.className = 'unit-chips'
  for (const code of codes) {
    const chip = document.createElement('button')
    chip.type = 'button'
    chip.className = 'unit-chip currency-chip'
    chip.addEventListener('click', () => { insertIntoInput(code); hidePopup('currencies-popup') })

    const symbolEl = document.createElement('span')
    symbolEl.className = 'chip-symbol'
    symbolEl.textContent = CURRENCY_SYMBOLS[code] ?? code

    const codeEl = document.createElement('span')
    codeEl.className = 'chip-code'
    codeEl.textContent = code

    chip.appendChild(symbolEl)
    chip.appendChild(codeEl)
    chips.appendChild(chip)
  }
  list.appendChild(chips)
}

async function fetchExchangeRates(): Promise<void> {
  const statusEl = document.getElementById('currencies-status')!
  statusEl.textContent = 'Loading…'
  statusEl.className = 'currencies-loading'

  try {
    const response = await fetch('/ecb-rates.xml')
    if (!response.ok) throw new Error(`HTTP ${response.status}`)

    exchangeRatesXml = await response.text()
    applyExchangeRates()

    const dateMatch = exchangeRatesXml.match(/time='(\d{4}-\d{2}-\d{2})'/)
    const date = dateMatch
      ? new Date(dateMatch[1]).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
      : 'unknown date'
    statusEl.textContent = `European Central Bank rates · ${date}`
    statusEl.className = ''
    buildCurrencyChips(exchangeRatesXml)
  } catch {
    statusEl.textContent = 'Unavailable'
    statusEl.className = 'currencies-error'
  }
}

// ── Session actions ───────────────────────────────────────────────────────────

function doReset(): void {
  initNumbat()
  output.innerHTML = ''
  variables.clear()
  functions.clear()
  updateVariables()
  updateFunctions()
  document.getElementById('scripts-list')!.innerHTML = '<p class="no-vars">No scripts loaded</p>'
  currentSession = createSession()
  saveCurrentSession()
  renderTabBar()
  input.value = ''
  resetHistory()
}

function doClear(): void {
  output.innerHTML = ''
  currentSession.inputs = []
  saveCurrentSession()
  input.value = ''
  resetHistory()
}

// ── Popups ────────────────────────────────────────────────────────────────────

let popupTrigger: HTMLElement | null = null
const openPopups: string[] = []

function showPopup(id: string): void {
  if (openPopups.length === 0) popupTrigger = document.activeElement as HTMLElement
  openPopups.push(id)
  const popup = document.getElementById(id)!
  popup.classList.add('visible')
  document.getElementById(id + '-backdrop')!.classList.add('visible')
  const first = popup.querySelector<HTMLElement>(FOCUSABLE_SELECTOR)
  first?.focus()
}

function hidePopup(id: string): void {
  document.getElementById(id)!.classList.remove('visible')
  document.getElementById(id + '-backdrop')!.classList.remove('visible')
  const idx = openPopups.lastIndexOf(id)
  if (idx >= 0) openPopups.splice(idx, 1)
  if (openPopups.length === 0) {
    popupTrigger?.focus()
    popupTrigger = null
  }
}

let confirmCallback: (() => void) | null = null

function showConfirmPopup(title: string, message: string, onConfirm: () => void, okLabel = 'Confirm'): void {
  document.getElementById('confirm-popup-title')!.textContent = title
  document.getElementById('confirm-popup-message')!.textContent = message
  document.getElementById('confirm-popup-ok')!.textContent = okLabel
  confirmCallback = onConfirm
  showPopup('confirm-popup')
}

function hideConfirmPopup(): void {
  hidePopup('confirm-popup')
  confirmCallback = null
}

function showInfoPopup(title: string, message: string): void {
  document.getElementById('info-popup-title')!.textContent = title
  document.getElementById('info-popup-message')!.textContent = message
  showPopup('info-popup')
}

function hideInfoPopup(): void { hidePopup('info-popup') }

// ── Main ──────────────────────────────────────────────────────────────────────

async function main(): Promise<void> {
  const initMsg = document.createElement('div')
  initMsg.className = 'entry init-msg'
  initMsg.textContent = 'Loading…'
  output.appendChild(initMsg)

  try {
    await init()
  } catch (err) {
    initMsg.textContent = 'Failed to load: ' + (err instanceof Error ? err.message : String(err))
    initMsg.classList.add('error')
    return
  }

  initNumbat()
  output.removeChild(initMsg)

  // Fetch rates before replaying sessions so currency expressions don't error on reload
  await fetchExchangeRates()

  // Load the most recent session, or start fresh
  const existing = loadSessions()
  if (existing.length > 0) {
    await replaySession(existing[0].id)
  } else {
    currentSession = createSession()
    saveCurrentSession()
    renderTabBar()
  }

  // Units and Functions panel buttons → popups
  buildUnitsSection()
  document.getElementById('units-panel-btn')!.addEventListener('click', () => showPopup('units-popup'))
  document.getElementById('units-popup-close')!.addEventListener('click', () => hidePopup('units-popup'))
  document.getElementById('units-popup-backdrop')!.addEventListener('click', () => hidePopup('units-popup'))
  buildDimensionsSection()
  document.getElementById('dimensions-panel-btn')!.addEventListener('click', () => showPopup('dimensions-popup'))
  document.getElementById('dimensions-popup-close')!.addEventListener('click', () => hidePopup('dimensions-popup'))
  document.getElementById('dimensions-popup-backdrop')!.addEventListener('click', () => hidePopup('dimensions-popup'))
  document.getElementById('functions-panel-btn')!.addEventListener('click', () => showPopup('functions-popup'))
  document.getElementById('functions-popup-close')!.addEventListener('click', () => hidePopup('functions-popup'))
  document.getElementById('functions-popup-backdrop')!.addEventListener('click', () => hidePopup('functions-popup'))
  document.getElementById('scripts-panel-btn')!.addEventListener('click', () => showPopup('scripts-popup'))
  document.getElementById('scripts-popup-close')!.addEventListener('click', () => hidePopup('scripts-popup'))
  document.getElementById('scripts-popup-backdrop')!.addEventListener('click', () => hidePopup('scripts-popup'))
  document.getElementById('scripts-upload-btn')!.addEventListener('click', () => scriptsFileInput.click())
  scriptsFileInput.addEventListener('change', async () => {
    const file = scriptsFileInput.files?.[0]
    if (!file) return
    try {
      const text = await file.text()
      const out = numbat.interpret(text)
      if (!out.is_error) {
        const fnMatches  = [...text.matchAll(/^fn\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*(\([^)]*\))/gm)]
        const letMatches = [...text.matchAll(/^let\s+([a-zA-Z_][a-zA-Z0-9_]*)/gm)]
        for (const m of fnMatches)  functions.set(m[1], m[2])
        for (const m of letMatches) variables.add(m[1])
        currentSession.inputs.push(text)
        saveCurrentSession()
        updateVariables()
        updateFunctions()
        addScriptItem(file.name, fnMatches.length, letMatches.length, false)
      } else {
        addScriptItem(file.name, 0, 0, true)
      }
    } catch {
      addScriptItem(file.name, 0, 0, true)
    }
    scriptsFileInput.value = ''
  })
  document.getElementById('currencies-panel-btn')!.addEventListener('click', () => showPopup('currencies-popup'))
  document.getElementById('currencies-popup-close')!.addEventListener('click', () => hidePopup('currencies-popup'))
  document.getElementById('currencies-popup-backdrop')!.addEventListener('click', () => hidePopup('currencies-popup'))

  // Info popup
  document.getElementById('info-popup-close')!.addEventListener('click', hideInfoPopup)
  document.getElementById('info-popup-backdrop')!.addEventListener('click', hideInfoPopup)
  document.getElementById('vars-help-btn')!.addEventListener('click', () => {
    showInfoPopup('Variables', 'Define variables with let name = expression to store a value for reuse. Tap a variable to insert it into your expression.')
  })
  document.getElementById('functions-help-btn')!.addEventListener('click', () => {
    showInfoPopup('Functions', 'Define functions with fn name(params) = expression. Tap a function to insert it at the cursor.')
  })
  document.getElementById('currencies-help-btn')!.addEventListener('click', () => {
    showInfoPopup('Currencies', 'Exchange rates are loaded from the European Central Bank (updated daily). Use currency codes in expressions — for example "100 USD to EUR" or "50 GBP + 30 CHF to EUR".')
  })
  document.getElementById('units-help-btn')!.addEventListener('click', () => {
    showInfoPopup('Units', 'Units can be used in expressions and conversions — for example "1 km to mi" or "9.81 m/s^2 * 80 kg to N". Tap any unit to insert it at the cursor.')
  })
  document.getElementById('dimensions-help-btn')!.addEventListener('click', () => {
    showInfoPopup('Dimensions', 'Dimensions are physical quantity types used in type annotations — for example "let x: Length = 5 m" or "fn speed(d: Length, t: Time) -> Velocity = d / t". Tap a dimension to insert it at the cursor.')
  })
  document.getElementById('scripts-help-btn')!.addEventListener('click', () => {
    showInfoPopup('Scripts', 'Upload Numbat script files (.nbt) to load function and variable definitions into the current session. Uploaded scripts appear here; their functions appear in the Functions panel.')
  })

  // Confirm popup
  document.getElementById('confirm-popup-close')!.addEventListener('click', hideConfirmPopup)
  document.getElementById('confirm-popup-backdrop')!.addEventListener('click', hideConfirmPopup)
  document.getElementById('confirm-popup-cancel')!.addEventListener('click', hideConfirmPopup)
  document.getElementById('confirm-popup-ok')!.addEventListener('click', () => {
    const callback = confirmCallback
    hideConfirmPopup()
    if (callback) callback()
  })

  // About popup
  document.getElementById('about-btn')!.addEventListener('click', () => showPopup('about-popup'))
  document.getElementById('about-popup-close')!.addEventListener('click', () => hidePopup('about-popup'))
  document.getElementById('about-popup-backdrop')!.addEventListener('click', () => hidePopup('about-popup'))
  document.getElementById('about-reset-btn')!.addEventListener('click', () => {
    showConfirmPopup(
      'Reset app data',
      'This will erase all sessions, variables, and cached data. The app will reload.',
      doResetAppData,
      'Reset'
    )
  })

  // Session action buttons
  document.getElementById('clear-btn')!.addEventListener('click', () => {
    showConfirmPopup('Clear session', 'Clear all output and history for this session?', doClear, 'Clear')
  })
  document.getElementById('reset-btn')!.addEventListener('click', () => {
    showConfirmPopup('Reset', 'Clear all output, variables, and functions, and start fresh?', doReset, 'Reset')
  })

  document.addEventListener('keydown', (e: KeyboardEvent) => {
    if (e.key === 'Escape') { hideConfirmPopup(); hideInfoPopup(); hidePopup('about-popup'); hidePopup('units-popup'); hidePopup('dimensions-popup'); hidePopup('functions-popup'); hidePopup('currencies-popup'); hidePopup('scripts-popup') }
    if (e.key === 'Tab' && openPopups.length > 0) {
      const topId = openPopups[openPopups.length - 1]
      trapFocus(e, document.getElementById(topId)!)
    }
  })

  // Mobile sidebar buttons
  const sidebar = document.getElementById('variables')!
  document.getElementById('mobile-vars-btn')!.addEventListener('click', () => {
    sidebar.classList.add('mobile-open')
    sidebarMiddle.scrollTop = 0
  })
  document.getElementById('mobile-units-btn')!.addEventListener('click', () => {
    showPopup('units-popup')
  })
  document.getElementById('mobile-dimensions-btn')!.addEventListener('click', () => {
    showPopup('dimensions-popup')
  })
  document.getElementById('mobile-functions-btn')!.addEventListener('click', () => {
    showPopup('functions-popup')
  })
  document.getElementById('mobile-scripts-btn')!.addEventListener('click', () => {
    showPopup('scripts-popup')
  })
  document.getElementById('mobile-currencies-btn')!.addEventListener('click', () => {
    showPopup('currencies-popup')
  })
  document.getElementById('mobile-sidebar-close')!.addEventListener('click', () => {
    sidebar.classList.remove('mobile-open')
  })

  // Sidebar collapse (desktop)
  const appEl = document.getElementById('app')!
  const collapseBtn = document.getElementById('sidebar-collapse-btn')!
  collapseBtn.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed')
    appEl.classList.toggle('sidebar-collapsed')
    const isCollapsed = sidebar.classList.contains('collapsed')
    collapseBtn.textContent = isCollapsed ? '‹' : '›'
    collapseBtn.title = isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'
    collapseBtn.setAttribute('aria-label', isCollapsed ? 'Expand sidebar' : 'Collapse sidebar')
  })

  // Number row and shortcut buttons
  function handleShortcutClick(e: MouseEvent): void {
    const btn = (e.target as Element).closest('.shortcut') as HTMLElement | null
    if (!btn) return
    insertIntoInput(btn.dataset['insert'] ?? '')
  }
  document.getElementById('numpad')!.addEventListener('click', handleShortcutClick)
  document.getElementById('shortcuts')!.addEventListener('click', handleShortcutClick)

  // New session button (in tab bar)
  document.getElementById('new-session-btn')!.addEventListener('click', () => startNewSession())

  // Session dropdown (mobile)
  sessionSelect.addEventListener('change', () => {
    replaySession(parseInt(sessionSelect.value))
  })

  // Input history navigation via arrow keys
  input.addEventListener('keydown', (e: KeyboardEvent) => {
    const inputs = currentSession.inputs
    if (e.key === 'ArrowUp') {
      if (inputs.length === 0) return
      e.preventDefault()
      if (historyIndex === -1) historyDraft = input.value
      historyIndex = Math.min(historyIndex + 1, inputs.length - 1)
      input.value = inputs[inputs.length - 1 - historyIndex]
      input.setSelectionRange(input.value.length, input.value.length)
    } else if (e.key === 'ArrowDown') {
      if (historyIndex === -1) return
      e.preventDefault()
      historyIndex--
      input.value = historyIndex === -1
        ? historyDraft
        : inputs[inputs.length - 1 - historyIndex]
      input.setSelectionRange(input.value.length, input.value.length)
    } else {
      historyIndex = -1
    }
  })

  // History navigation buttons (for mobile)
  document.getElementById('history-prev')!.addEventListener('click', () => {
    const inputs = currentSession.inputs
    if (inputs.length === 0) return
    if (historyIndex === -1) historyDraft = input.value
    historyIndex = Math.min(historyIndex + 1, inputs.length - 1)
    input.value = inputs[inputs.length - 1 - historyIndex]
    input.focus()
    input.setSelectionRange(input.value.length, input.value.length)
  })

  document.getElementById('history-next')!.addEventListener('click', () => {
    if (historyIndex === -1) return
    historyIndex--
    input.value = historyIndex === -1
      ? historyDraft
      : currentSession.inputs[currentSession.inputs.length - 1 - historyIndex]
    input.focus()
    input.setSelectionRange(input.value.length, input.value.length)
  })

  form.addEventListener('submit', (event: SubmitEvent) => {
    event.preventDefault()

    const query = input.value.trim()
    if (!query) return

    resetHistory()

    let result  = ''
    let isError = false

    try {
      const cmdResult = numbat.try_run_command(query)

      if (cmdResult.is_command) {
        if (cmdResult.should_reset) {
          doReset()
          return
        }
        if (cmdResult.should_clear) {
          doClear()
          return
        }
        result = formatCommandOutput(cmdResult.output ?? '(command executed)')
        currentSession.inputs.push(query)
        saveCurrentSession()
      } else {
        currentSession.inputs.push(query)
        saveCurrentSession()

        const interpreterOutput = numbat.interpret(query)
        result  = interpreterOutput.output
        isError = interpreterOutput.is_error

        if (!isError) {
          const letMatch = query.match(LET_PATTERN)
          if (letMatch) { variables.add(letMatch[1]); updateVariables() }
          const fnMatch = query.match(FN_PATTERN)
          if (fnMatch) { functions.set(fnMatch[1], fnMatch[2]); updateFunctions() }
        }
      }
    } catch (err) {
      result  = escapeHtml(err instanceof Error ? err.message : String(err))
      isError = true
    }

    appendEntry(query, result, isError)
    input.value = ''
  })

  input.focus()
}

// ── PWA update ────────────────────────────────────────────────────────────────

const aboutCheckBtn = document.getElementById('about-check-btn') as HTMLButtonElement
const aboutUpdateBtn = document.getElementById('about-update-btn') as HTMLButtonElement

;(document.getElementById('about-version') as HTMLSpanElement).textContent = __APP_VERSION__

let updateAvailable = false

const updateSW = registerSW({
  onNeedRefresh() {
    updateAvailable = true
    aboutCheckBtn.hidden = true
    aboutUpdateBtn.hidden = false
  },
})

aboutCheckBtn.addEventListener('click', async () => {
  aboutCheckBtn.textContent = 'Checking…'
  aboutCheckBtn.disabled = true
  const reg = await navigator.serviceWorker.getRegistration()
  await reg?.update()
  if (!updateAvailable) {
    aboutCheckBtn.textContent = 'Check for update'
    aboutCheckBtn.disabled = false
  }
})

aboutUpdateBtn.addEventListener('click', () => {
  void updateSW(true)
})

// ── Reset app data ────────────────────────────────────────────────────────────

function doResetAppData(): void {
  void (async () => {
    localStorage.clear()
    const regs = await navigator.serviceWorker.getRegistrations()
    await Promise.all(regs.map(r => r.unregister()))
    const cacheNames = await caches.keys()
    await Promise.all(cacheNames.map(n => caches.delete(n)))
    location.reload()
  })()
}

main()
