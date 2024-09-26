export function useUpdateTodos() {
  return useMutation({
    mutationFn: ({ id, checked }: { id: string; checked: boolean }) => {
      return todoFetch(`/todos/${id}`, {
        method: "PATCH",
        body: { checked },
      });
    },
  });
}
