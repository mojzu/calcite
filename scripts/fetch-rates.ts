import { mkdirSync, writeFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const dest = join(root, 'public', 'ecb-rates.xml')

mkdirSync(join(root, 'public'), { recursive: true })

console.log('Downloading ECB exchange rates...')
const res = await fetch('https://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml')
if (!res.ok) throw new Error(`HTTP ${res.status}`)
writeFileSync(dest, await res.text())
console.log('ECB rates ready.')
