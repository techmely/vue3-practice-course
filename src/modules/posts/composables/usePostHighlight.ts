import { useQuery } from "@tanstack/vue-query";
import { getPostHighlight } from "../services/post.service";

export function usePostHighlight() {
  const query = useQuery({
    queryKey: ['posts', 'highlight'],
    queryFn: () => getPostHighlight(),
    select: (data) => {
      return {
        bestHighlight: data[0],
        highlights: data.slice(1)
      }
    }
  })
  return query
}