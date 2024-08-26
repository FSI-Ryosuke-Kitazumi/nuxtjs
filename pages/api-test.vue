<template>
  <h1>api-test</h1>
  {{ data }}
</template>

<script setup lang="ts">
const nuxtApp = useNuxtApp();

const { data } = await useFetch("http://localhost:8000/", {
  key: "api_cache_key_xxx",
  getCachedData: (key) => nuxtApp.payload.data[key] || nuxtApp.static.data[key],
});
</script>
