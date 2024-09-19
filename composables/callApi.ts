import type { User } from "~/mocks/handlers";

export function useCallApi() {
  const config = useRuntimeConfig();

  return apiClient<User>("/user");
}
