import typescript from '@rollup/plugin-typescript'
import path from 'path'

import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)

const __dirname = path.dirname(__filename)

export default {
    input: path.resolve(__dirname, '../src/main.ts'),
    output: {
        format: 'es',
        file: path.resolve(__dirname, '../dist/index.js'),
    },
    plugins: [typescript()],
}
