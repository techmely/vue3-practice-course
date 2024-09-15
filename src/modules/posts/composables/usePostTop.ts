import { useQuery } from "@tanstack/vue-query";
import { getPostTop } from "../services/post.service";

export function usePostTop() {
  const query = useQuery({
    queryKey: ['posts', 'top'],
    queryFn: () => getPostTop()
  });
  return query;
}
