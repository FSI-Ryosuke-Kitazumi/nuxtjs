import type { Todo } from "~/types/api/todos";

// RULE: useXXXのような関数を使っている、refなどのvueの機能を使っている場合、ファイル名・関数名に「use」プレフィックスをつける
export function useFetchTodos() {
  const url = "/todos";

  return useQuery({
    queryKey: [url],
    queryFn: () => todoFetch<Todo[]>(url),
  });
}
