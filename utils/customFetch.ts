const config = useRuntimeConfig();

export const customFetch = $fetch.create({
  baseURL: config.public.apiBase,
});
