const path = require('path')
const webpack = require('webpack')
const package = require('./package.json')

module.exports = (env) => {
  const config = {
    entry: './src/prime_spiral.js',
    target: 'web',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, '.'),
      library: {
        type: 'umd',
        name: 'PrimeSpiral',
        export: 'default',
      },
    },
    optimization: {
      minimize: true,
    }
  }

  return config
}
