import type { User } from "~/mocks/handlers";

export function useCallApi() {
  return useFetch<User>("https://example.com/user");
}
