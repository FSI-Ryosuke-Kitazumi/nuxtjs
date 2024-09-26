import type { Todo } from "~/types/api/todos";

export function usePostTodos() {
  const url = "/todos";

  return useMutation({
    mutationFn: (todo: Todo) => {
      return todoFetch<Todo>(url, {
        method: "POST",
        body: todo,
      });
    },
  });
}
