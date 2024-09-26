<!-- RULE: script, template, styleの順で並べる -->
<script setup lang="ts">
import { useFetchTodos } from "~/composables/todos/useFetchTodos";
import { usePostTodos } from "~/composables/todos/usePostTodos";
import type { Todo } from "~/types/api/todos";
import { v4 as uuidv4 } from "uuid";
import { useUpdateTodos } from "~/composables/todos/useUpdateTodos";

const { data: todos, refetch: refetchTodos } = useFetchTodos();
const { mutate: addTodo } = usePostTodos();
const { mutate: updateTodo } = useUpdateTodos();

const input = ref("");

// RULE: アロー関数ではなくfunctionを使う
function handleAddTodo() {
  const newTodo: Todo = {
    id: uuidv4(),
    name: input.value,
    checked: false,
  };

  addTodo(newTodo, {
    onSuccess: () => refetchTodos(),
  });
}

// RULE: イベントの関数名の頭にhandleをつける
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
        <!-- RULE: クリックイベントなどはアロー関数を使ってもいい -->
        <input
          :id="`todo-${todo.id}`"
          :value="todo.checked"
          type="checkbox"
          @change="(e) => handleUpdateTodo(todo.id, e)"
        />
        <label :for="`todo-${todo.id}`" class="ml-2">
          {{ todo.name }}
        </label>
      </p>
    </div>
  </v-container>
</template>
