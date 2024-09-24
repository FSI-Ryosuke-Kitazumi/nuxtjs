<script setup lang="ts">
import { usePostTodos } from "~/composables/todos/usePostTodos";
import { useFetchUser } from "~/composables/user/useFetchUser";

// const { data } = await apiClient("https://example.com/user");
const { data: user } = await useFetchUser();
const { data: todos, mutate: postTodos } = await usePostTodos();

// const todos = ref();

const action = async () => {
  postTodos();

  // const { data: res } = await apiClient.post("/todos");
  // todos.value = res;
};
</script>

<template>
  <h1>api-test</h1>
  {{ user?.firstName }}

  <div>
    <button @click="action">post</button>
    <p>{{ todos?.title }}</p>
  </div>
</template>
