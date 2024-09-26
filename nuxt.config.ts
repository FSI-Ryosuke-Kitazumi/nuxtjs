// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  ssr: false, // NOTE: SSRだとMSWでのfetchがうまくいかない
  imports: {
    autoImport: true,
  },
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_URL,
      todoApiBase: process.env.NUXT_TODO_URL,
    },
  },
  postcss: {
    plugins: {
      autoprefixer: {},
    },
  },
  build: {
    transpile: ["vuetify"],
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  modules: [
    "@nuxt/eslint",
    "@pinia/nuxt",
    "@nuxt/test-utils/module",
    "@hebilicious/vue-query-nuxt",
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
  ],
  pinia: {
    storesDirs: ["./stores/**"],
  },
});
