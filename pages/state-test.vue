<script setup lang="ts">
import { useCounterStore } from "~/stores/counter";

const color = useColor();

const inputColor = ref<string>("");

const changeColor = (newColor: string) => {
  color.value = newColor;
};

// pinia
const counter = useCounterStore();
</script>

<template>
  <div>
    <h1>state-test</h1>
    <p>{{ color }}</p>

    <div>
      <input v-model="inputColor" />
      <button @click="changeColor(inputColor)">change</button>
    </div>

    <!-- pinia -->
    <div>
      <p>{{ counter.count }}</p>
      <p>{{ counter.doubleCount }}</p>
      <button @click="counter.increment">increment</button>
    </div>
  </div>
</template>
