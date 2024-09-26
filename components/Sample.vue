<script setup lang="ts">
const props = defineProps<{
  title: string;
}>();

console.log(props.title);
</script>

<template>
  <div>
    <div>sample</div>
    <slot />
    <p>{{ title }}</p>
  </div>
</template>
