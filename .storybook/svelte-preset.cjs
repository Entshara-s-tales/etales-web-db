const path = require('path')
const tsconfig = require('../tsconfig.json')

const aliasPaths = tsconfig.compilerOptions.paths
const basePath = path.resolve(__dirname, '../')

function getPaths() {
  const keys = Object.keys(aliasPaths)
  const newPaths = {}
  keys.forEach((key) => {
    newPaths[key.replace('/*', '')] = aliasPaths[key]
      .map((x) => path.resolve(basePath, x.replace('/*', '')))
      .join('')
  })
  return newPaths
}

module.exports = {
  webpackFinal: async (baseConfig, options) => {
    return {
      ...baseConfig,
      resolve: {
        ...baseConfig.resolve,
        alias: {
          ...baseConfig.alias,
          ...getPaths(),
        },
      },
    }
  },
}
