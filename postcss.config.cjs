const tailwindcss = require("@tailwindcss/jit");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");

const mode = process.env.NODE_ENV;
const dev = mode === "development";
const tests = process.env.JEST_ENV === 'test';

module.exports = {
	plugins: [
		// Some plugins, like postcss-nested, need to run before Tailwind

		!tests && tailwindcss,

		// But others, like autoprefixer, need to run after

		!tests && autoprefixer,

		!tests && !dev && cssnano({
			preset: "default",
		}),
	],
};

