import type { Todo } from "~/types/api/todos";

export function useFetchTodos() {
  const url = "/todos";

  return useQuery({
    queryKey: [url],
    queryFn: () => todoFetch<Todo[]>(url),
  });
}
