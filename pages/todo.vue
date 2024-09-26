<script setup lang="ts">
import { useFetchTodos } from "~/composables/todos/useFetchTodos";
import { usePostTodos } from "~/composables/todos/usePostTodos";
import type { Todo } from "~/types/api/todos";
import { v4 as uuidv4 } from "uuid";
import { useUpdateTodos } from "~/composables/todos/useUpdateTodos";

const { data: todos, refetch } = useFetchTodos();
const { mutate: addTodo } = usePostTodos();
const { mutate: updateTodo } = useUpdateTodos();

const input = ref();

function handleAddTodo() {
  const newTodo: Todo = {
    id: uuidv4(),
    name: input.value,
    checked: false,
  };

  addTodo(newTodo, {
    onSuccess: () => refetch(),
  });
}

function handleUpdateTodo(id: string, e: Event) {
  if (!(e.target instanceof HTMLInputElement)) return;

  updateTodo({ id, checked: e.target.checked });
}
</script>

<template>
  <v-container>
    <h1>Todo</h1>
    <div class="d-flex ga-2">
      <v-text-field v-model="input" name="name" label="label" single-line />
      <v-btn color="primary" @click="handleAddTodo">ADD</v-btn>
    </div>
    <div v-for="todo in todos" :key="todo.id">
      <p>
        <input
          :value="todo.checked"
          type="checkbox"
          @change="(e) => handleUpdateTodo(todo.id, e)"
        />{{ todo.name }}
      </p>
    </div>
  </v-container>
</template>
