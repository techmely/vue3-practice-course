import { useQuery } from "@tanstack/vue-query";
import { getPostRecent } from "../services/post.service";

export function usePostRecent() {
  const query = useQuery({
    queryKey: ['posts', 'recent'],
    queryFn: () => getPostRecent()
  });
  return query;
}
