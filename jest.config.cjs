const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { compilerOptions } = require('./tsconfig');
const tsconfig = require('./tsconfig.json')



const tsPaths = pathsToModuleNameMapper(tsconfig.compilerOptions.paths, { prefix: '<rootDir>/' })

module.exports = {
  "transform": {
    "^.+\\.svelte$": [
      "<rootDir>/scripts/svelte-jester/transform.cjs",
      {
        "preprocess": true
      }
    ],
    "^.+\\.js$": "babel-jest",
    "^.+\\.ts$": "ts-jest"
  },
  "moduleFileExtensions": [
    "js",
    "ts",
    "svelte"
  ],
  "setupFilesAfterEnv": [
    "@testing-library/jest-dom/extend-expect"
  ],
  "modulePathIgnorePatterns": [
    ".history"
  ],
  moduleNameMapper: tsPaths
}
