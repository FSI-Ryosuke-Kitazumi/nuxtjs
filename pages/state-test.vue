<template>
  <h1>state-test</h1>
  <p>{{ color }}</p>

  <div>
    <input v-model="inputColor" />
    <button @click="changeColor(inputColor)">change</button>
  </div>
</template>

<script setup lang="ts">
const color = useColor();

const inputColor = ref<string>("");

const changeColor = (newColor: string) => {
  color.value = newColor;
};
</script>
