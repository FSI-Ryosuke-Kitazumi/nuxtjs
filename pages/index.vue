<script setup lang="ts">
import { useFetchUser } from "~/composables/user/useFetchUser";

const taskNameList = ref<string[]>(["vue", "vue3", "nuxt3"]);
const taskName = ref<string>("");

const addTask = () => {
  if (taskName.value === "") return;

  taskNameList.value.push(taskName.value);
  taskName.value = "";
};

const completeTask = (completeTaskName: string) => {
  taskNameList.value = taskNameList.value.filter(
    (taskName) => taskName !== completeTaskName
  );
};

// color
const color = useColor();

// transition
const transition = () => {
  navigateTo("state-test");
};

// api-test
const { data } = await useFetchUser();

console.log(constants.todos.TITLE);
</script>

<template>
  <div class="pa-2">
    <div>
      <h1>TODO APP</h1>
      <h2>タスク追加</h2>

      <input v-model="taskName" type="text" />

      <button @click="addTask()">追加</button>

      <h2>タスク名</h2>
      <div v-for="taskName in taskNameList" :key="taskName">
        <span>{{ taskName }}</span>
        <button @click="completeTask(taskName)">完了</button>
      </div>
    </div>

    <div>
      color
      <p>{{ color }}</p>
    </div>

    <div>
      <h2>transition</h2>
      <p>
        <nuxt-link to="state-test" class="text-cyan-500">state-test</nuxt-link>
      </p>
      <p>
        <nuxt-link to="api-test" class="text-cyan-500">api-test</nuxt-link>
      </p>
      <p>
        <nuxt-link to="websocket" class="text-cyan-500">websocket</nuxt-link>
      </p>
      <p>
        <nuxt-link to="todo" class="text-cyan-500">todo</nuxt-link>
      </p>
      <button @click="transition">button</button>
    </div>

    <div>
      <p>{{ data?.firstName }}</p>
    </div>

    <Sample title="qwer">asdf</Sample>
  </div>
</template>
