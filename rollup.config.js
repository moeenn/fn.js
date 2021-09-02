import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve'
import { uglify } from 'rollup-plugin-uglify'

export default {
  input: './src/main.mjs',
  output: {
    file: './dist/fn.min.js',
    format: 'iife',
    name: 'fn'
  },
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    resolve(),
    uglify(),
  ],
}