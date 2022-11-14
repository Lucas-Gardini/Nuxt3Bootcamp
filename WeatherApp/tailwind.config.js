/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [".components/**/*.{vue,js}", ".layouts/**/*.vue", ".pages/**/*.vue", "./app.vue", "./plugins/**/*.{js,ts}", "./nuxt.config.{js,ts}"],
	theme: {
		extend: {},
	},
	plugins: [
		require("@tailwindcss/aspect-ratio"),
		require("@tailwindcss/forms"),
		require("@tailwindcss/line-clamp"),
		require("@tailwindcss/typography"),
	],
};
