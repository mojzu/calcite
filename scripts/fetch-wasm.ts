import { existsSync, mkdirSync, writeFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const root    = join(dirname(fileURLToPath(import.meta.url)), '..')
const pkgDir  = join(root, 'numbat-wasm-pkg')
const sentinel = join(pkgDir, 'numbat_wasm_bg.wasm')

if (existsSync(sentinel)) process.exit(0)

console.log('Downloading numbat-wasm package...')
mkdirSync(pkgDir, { recursive: true })

const base  = 'https://numbat.dev/pkg'
const files = ['package.json', 'numbat_wasm.js', 'numbat_wasm.d.ts', 'numbat_wasm_bg.wasm']

for (const file of files) {
  const res = await fetch(`${base}/${file}`)
  if (!res.ok) throw new Error(`HTTP ${res.status} fetching ${file}`)
  writeFileSync(join(pkgDir, file), Buffer.from(await res.arrayBuffer()))
}

console.log('numbat-wasm ready.')
