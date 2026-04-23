import { Resvg } from '@resvg/resvg-js'
import { readFileSync, writeFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const svg  = readFileSync(join(root, 'public', 'favicon.svg'), 'utf-8')

for (const size of [192, 512] as const) {
  const resvg = new Resvg(svg, { fitTo: { mode: 'width', value: size } })
  const png   = resvg.render().asPng()
  writeFileSync(join(root, 'public', `icon-${size}.png`), png)
  console.log(`Generated public/icon-${size}.png`)
}

writeFileSync(join(root, 'public', 'icon-title.svg'), generateIconTitle(svg))
console.log('Generated public/icon-title.svg')

// ── icon-title.svg generation ─────────────────────────────────────────────────
//
// Derives icon-title.svg from favicon.svg by scaling the coordinate space from
// 32×32 to 65×65, giving sub-pixel precision for the sidebar logo. All elements
// are preserved — only coordinate/size attributes are scaled; angles are left
// unchanged. The rendered size stays 32×32 px via explicit width/height attrs.

function scaleValue(value: string, scale: number): string {
  return value.replace(/-?[\d.]+/g, n => (parseFloat(n) * scale).toFixed(2))
}

function scaleTransform(transform: string, scale: number): string {
  // Scale translate() coordinates; leave angular functions (skewY, rotate) unchanged
  return transform.replace(/translate\(([^)]*)\)/, (_, args) =>
    `translate(${scaleValue(args, scale)})`
  )
}

function generateIconTitle(faviconSvg: string): string {
  const viewBoxSize = 65
  const scale = viewBoxSize / 32

  // Scale coordinate and size attributes throughout (favicon.svg has no
  // width/height on <svg> itself, so these replacements only affect child elements)
  let result = faviconSvg
    .replace(/\bpoints="([^"]+)"/g,       (_, v) => `points="${scaleValue(v, scale)}"`)
    .replace(/\bx="([^"]+)"/g,            (_, v) => `x="${scaleValue(v, scale)}"`)
    .replace(/\by="([^"]+)"/g,            (_, v) => `y="${scaleValue(v, scale)}"`)
    .replace(/\bx1="([^"]+)"/g,           (_, v) => `x1="${scaleValue(v, scale)}"`)
    .replace(/\by1="([^"]+)"/g,           (_, v) => `y1="${scaleValue(v, scale)}"`)
    .replace(/\bx2="([^"]+)"/g,           (_, v) => `x2="${scaleValue(v, scale)}"`)
    .replace(/\by2="([^"]+)"/g,           (_, v) => `y2="${scaleValue(v, scale)}"`)
    .replace(/(?<=\s)width="([^"]+)"/g,    (_, v) => `width="${scaleValue(v, scale)}"`)
    .replace(/(?<=\s)height="([^"]+)"/g,  (_, v) => `height="${scaleValue(v, scale)}"`)
    .replace(/\brx="([^"]+)"/g,           (_, v) => `rx="${scaleValue(v, scale)}"`)
    .replace(/\bstroke-width="([^"]+)"/g, (_, v) => `stroke-width="${scaleValue(v, scale)}"`)
    .replace(/\btransform="([^"]+)"/g,    (_, v) => `transform="${scaleTransform(v, scale)}"`)

  // Update the svg element: expand viewBox, pin rendered size to 32×32 px
  result = result.replace(
    /<svg([^>]*)>/,
    (_, attrs) => `<svg${attrs.replace(/viewBox="[^"]*"/, `viewBox="0 0 ${viewBoxSize} ${viewBoxSize}"`)} width="32" height="32">`
  )

  return result
}
