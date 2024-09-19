// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  ssr: false,
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_URL,
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["@pinia/nuxt", "@nuxt/test-utils/module"],
  pinia: {
    storesDirs: ["./stores/**"],
  },
});
