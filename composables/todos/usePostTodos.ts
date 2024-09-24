import type { Todos } from "~/types/api/todos";

export function usePostTodos() {
  const url = "/todos";

  return useMutation<Todos>({
    mutationFn: () =>
      customFetch(url, {
        method: "POST",
      }),
  });
}
