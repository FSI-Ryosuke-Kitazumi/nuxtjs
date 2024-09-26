const config = useRuntimeConfig();

export const todoFetch = $fetch.create({
  baseURL: config.public.todoApiBase,
});
