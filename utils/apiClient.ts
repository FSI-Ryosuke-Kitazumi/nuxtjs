import axios from "axios";

const config = useRuntimeConfig();

const apiClient = axios.create({
  baseURL: config.public.apiBase,
});

export default apiClient;
