import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt({
  files: ["**/*.ts", "**/*.vue"],
  rules: {
    "vue/html-self-closing": [
      "error",
      {
        html: {
          void: "never",
          normal: "always",
          component: "always",
        },
        svg: "always",
        math: "always",
      },
    ],
  },
});
