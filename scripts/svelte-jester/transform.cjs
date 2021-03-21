/**
 * Based upon https://github.com/mihar-22/svelte-jester/blob/master/src/svelte-jest.js
 */
// const log = require('why-is-node-running')
const { basename } = require("path");
const { execSync } = require("child_process");
const svelte = require("svelte/compiler");
const { getSvelteConfig } = require("./svelteconfig.cjs");

const transformer = (options = {}) => (source, filename) => {
  const { debug, compilerOptions, preprocess, rootMode, maxBuffer } = options;

  let processedMap;
  let processedCode = source;

  if (preprocess) {
    const svelteConfig = getSvelteConfig(rootMode, filename, preprocess);
    const preprocessor = require.resolve("./preprocess.cjs");
    const preprocessResult = execSync(
      `node --unhandled-rejections=strict --abort-on-uncaught-exception "${ preprocessor }"`,
      {
        env: { PATH: process.env.PATH, source, filename, svelteConfig },
        maxBuffer: maxBuffer || 10 * 1024 * 1024,
      }
    ).toString();
    const parsedPreprocessResult = JSON.parse(preprocessResult);
    processedCode = parsedPreprocessResult.code;
    processedMap = parsedPreprocessResult.map;
  }

  const result = svelte.compile(processedCode, {
    filename: basename(filename),
    css: true,
    accessors: true,
    dev: true,
    format: "cjs",
    sourcemap: processedMap,
    ...compilerOptions,
  });

  if (debug) {
    console.log(result.js.code);
  }

  const esInterop =
    'Object.defineProperty(exports, "__esModule", { value: true });';

  return {
    code: result.js.code + esInterop,
    map: result.js.map,
  };
};

exports.createTransformer = (options) => ({
  process: transformer(options),
});