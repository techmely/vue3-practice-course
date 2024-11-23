import { useQuery } from '@tanstack/vue-query'
import { getPostTrending } from '../services/post.service'

export function usePostTrending() {
  const query = useQuery({
    queryKey: ['posts', 'trending'],
    queryFn: () => getPostTrending()
  })
  return query
}
