// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	runtimeConfig: {
		public: {
			WEATHER_APP_SECRET: process.env.WEATHER_APP_SECRET,
		},
	},
	modules: ["@nuxtjs/tailwindcss"],
});
