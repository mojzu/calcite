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
