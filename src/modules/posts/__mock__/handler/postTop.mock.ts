import { appEnv } from '@/shared/helpers/environment';
import { http, HttpResponse } from 'msw'
import type { PostTop } from '../../post.types';

const topPosts: PostTop[] = [
  { id: '1', title: 'Top Post 1', content: 'Content 1', author: 'Author 1', createdAt: '2023-10-01', image: 'https://placehold.co/110x75/000000/FFFFFF.png' },
  { id: '2', title: 'Top Post 2', content: 'Content 2', author: 'Author 2', createdAt: '2023-10-02', image: 'https://placehold.co/110x75/000000/FFFFFF.png' },
  { id: '3', title: 'Top Post 3', content: 'Content 3', author: 'Author 3', createdAt: '2023-10-03', image: 'https://placehold.co/110x75/000000/FFFFFF.png' },
  { id: '4', title: 'Top Post 4', content: 'Content 4', author: 'Author 4', createdAt: '2023-10-04', image: 'https://placehold.co/110x75/000000/FFFFFF.png' },
  { id: '5', title: 'Top Post 5', content: 'Content 5', author: 'Author 5', createdAt: '2023-10-05', image: 'https://placehold.co/110x75/000000/FFFFFF.png' },
  { id: '6', title: 'Top Post 6', content: 'Content 6', author: 'Author 6', createdAt: '2023-10-06', image: 'https://placehold.co/110x75/000000/FFFFFF.png' },
];

export const postTopHandler = [
  http.get(`${appEnv.VITE_BASE_API_URL}/api/v1/posts/top`, () => {
    return HttpResponse.json(topPosts)
  })
]
