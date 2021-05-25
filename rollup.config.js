import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import { uglify } from 'rollup-plugin-uglify'

export default {
  input: './src/main.js',
  output: {
    file: './build/fn.min.js',
    format: 'iife',
    name: 'fn'
  },
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    resolve(),
    commonjs(),
    uglify(),
  ],
}