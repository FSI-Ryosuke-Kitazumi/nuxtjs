<template>
  <h1>api-test</h1>
  {{ data?.firstName }}
</template>

<script setup lang="ts">
import { useCallApi } from "~/composables/callApi";

// const { data } = await apiClient("https://example.com/user");
const { data } = await useCallApi();
</script>
