<script setup lang="ts">
import { usePostTodos } from "~/composables/todos/usePostTodos";
import { useFetchUser } from "~/composables/user/useFetchUser";

// const { data } = await apiClient("https://example.com/user");
const { data: user, error, status } = await useFetchUser();
const { data: todos, mutate: postTodos } = await usePostTodos();

// const todos = ref();

const handlePost = async () => {
  postTodos();

  // const { data: res } = await apiClient.post("/todos");
  // todos.value = res;
};
</script>

<template>
  <div class="asdf">
    <h1>api-test</h1>
    <p>
      {{ user?.firstName }}
    </p>

    <div>
      <button @click="handlePost">post</button>
      <p>{{ todos?.name }}</p>
    </div>

    <p>status: {{ status }}</p>
    <p>message: {{ error }}</p>
    <p>message: {{ error?.message }}</p>
  </div>
</template>

<style scoped>
.asdf {
  /* display: flex; */
}
</style>
