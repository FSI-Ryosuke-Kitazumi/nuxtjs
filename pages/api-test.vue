<template>
  <h1>api-test</h1>
  {{ data }}
</template>

<script setup lang="ts">
const { data } = await apiClient("/api/hello");
</script>
