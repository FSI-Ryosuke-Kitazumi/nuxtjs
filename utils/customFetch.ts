const config = useRuntimeConfig();

// RULE: APIの呼び出しには以下customFetchを使う
export const customFetch = $fetch.create({
  baseURL: config.public.apiBase,
});
