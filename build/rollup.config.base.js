import babel from 'rollup-plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import vue from 'rollup-plugin-vue'
import cjs from 'rollup-plugin-commonjs'
import replace from 'rollup-plugin-replace'
import requireContext from 'rollup-plugin-require-context'
import { string } from 'rollup-plugin-string'
import fs from 'fs'
import CleanCSS from 'clean-css'
import autoprefixer from 'autoprefixer'
import css from 'rollup-plugin-css-only'

const config = require('../package.json')

export default {
  input: 'index.js',
  plugins: [
    resolve({
      jsnext: true,
      main: true,
      browser: true,
    }),
    string({
      include: '**/*.svg',
    }),
    vue({
      css: false,
      style: {
        postcssPlugins: [autoprefixer],
      },
    }),
    css({
      output: styles => {
        fs.writeFileSync('lib/thorui.css', new CleanCSS().minify(styles).styles)
      },
    }),
    babel({
      exclude: 'node_modules/**',
      runtimeHelpers: true,
    }),
    cjs(),
    requireContext(),
    replace({
      VERSION: JSON.stringify(config.version),
    }),
  ],
  watch: {
    include: 'components/**',
  },
}
