export const apiClient = (url: string) => {
  const nuxtApp = useNuxtApp();
  
  return useFetch(url, {
    key: url,
    getCachedData: (key) => nuxtApp.payload.data[key] || nuxtApp.static.data[key],
  });
}
