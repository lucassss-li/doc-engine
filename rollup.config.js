import typescript from '@rollup/plugin-typescript'

console.log(typescript)

export default {
    input: './src/main.ts',
    output: {
        format: 'es',
        file: 'dist/index.js',
    },
    plugins: [typescript()],
}
