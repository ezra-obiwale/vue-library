import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import babel from 'rollup-plugin-babel'
import vue from 'rollup-plugin-vue'
import { terser } from 'rollup-plugin-terser'
import pkg from './package.json'

export default [
  // ESM build to be used with webpack/rollup.
  {
    input: 'src/components/index.js',
    output: [
      {
        file: pkg.rollup.module,
        format: 'esm'
      }
    ],
    plugins: [
      resolve(),
      commonjs(),
      vue(),
      babel({
        exclude: ['docs/**', 'node_modules/**'] // only transpile our source code
      }),
      terser()
    ]
  },
  // SSR build.
  {
    input: 'src/components/index.js',
    output: [
      {
        file: pkg.rollup.ssr,
        format: 'cjs'
      }
    ],
    plugins: [
      resolve(),
      commonjs(),
      vue({ template: { optimizeSSR: true } }),
      babel({
        exclude: ['docs/**', 'node_modules/**'] // only transpile our source code
      }),
      terser()
    ]
  },
  // Browser build.
  {
    input: 'src/index.js',
    output: [
      {
        file: pkg.rollup.browser,
        format: 'iife'
      }
    ],
    plugins: [
      resolve(),
      commonjs(),
      vue(),
      babel({
        exclude: ['docs/**', 'node_modules/**'] // only transpile our source code
      }),
      terser()
    ]
  }
]
