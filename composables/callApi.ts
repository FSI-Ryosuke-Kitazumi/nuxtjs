import type { User } from "~/mocks/api/user";

export function useCallApi() {
  const config = useRuntimeConfig();

  return apiFetch<User>("/user");
}
