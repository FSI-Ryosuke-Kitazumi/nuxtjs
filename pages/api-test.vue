<template>
  <h1>api-test</h1>
  {{ data }}
</template>

<script setup lang="ts">
const { data } = await apiClient("https://example.com/user");
</script>
