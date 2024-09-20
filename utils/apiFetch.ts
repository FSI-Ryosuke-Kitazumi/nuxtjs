const apiFetch = <T>(url: string) => {
  const nuxtApp = useNuxtApp();
  const config = useRuntimeConfig();

  return useFetch<T>(url, {
    key: url,
    getCachedData: (key) =>
      nuxtApp.payload.data[key] || nuxtApp.static.data[key],
    baseURL: config.public.apiBase,
  });
};

export default apiFetch;
