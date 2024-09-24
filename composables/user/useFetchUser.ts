import type { User } from "~/types/api/user";

export function useFetchUser() {
  const url = "/user";

  return useQuery<User>({
    queryKey: [url],
    queryFn: () => customFetch(url),
  });
}
