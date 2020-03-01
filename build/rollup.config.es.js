import base from './rollup.config.base'

const config = Object.assign({}, base, {
  output: {
    name: 'thorui',
    file: 'lib/thorui.esm.js',
    format: 'es',
  },
  external: [
    // 'focus-visible',
  ],
})

export default config
