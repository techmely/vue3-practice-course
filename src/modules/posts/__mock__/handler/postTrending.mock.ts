import { appEnv } from '@/shared/helpers/environment'
import { http, HttpResponse } from 'msw'
import type { PostTrending } from '../../post.types'

const trendingPosts: PostTrending[] = [
  {
    id: '1',
    title: 'Trending Post 1',
    content: 'Content 1',
    author: 'Author 1',
    createdAt: '2023-10-01',
    image: 'https://placehold.co/110x75/000000/FFFFFF.png'
  },
  {
    id: '2',
    title: 'Trending Post 2',
    content: 'Content 2',
    author: 'Author 2',
    createdAt: '2023-10-02',
    image: 'https://placehold.co/110x75/000000/FFFFFF.png'
  },
  {
    id: '3',
    title: 'Trending Post 3',
    content: 'Content 3',
    author: 'Author 3',
    createdAt: '2023-10-03',
    image: 'https://placehold.co/110x75/000000/FFFFFF.png'
  },
  {
    id: '4',
    title: 'Trending Post 4',
    content: 'Content 4',
    author: 'Author 4',
    createdAt: '2023-10-04',
    image: 'https://placehold.co/110x75/000000/FFFFFF.png'
  },
  {
    id: '5',
    title: 'Trending Post 5',
    content: 'Content 5',
    author: 'Author 5',
    createdAt: '2023-10-05',
    image: 'https://placehold.co/110x75/000000/FFFFFF.png'
  },
  {
    id: '6',
    title: 'Trending Post 6',
    content: 'Content 6',
    author: 'Author 6',
    createdAt: '2023-10-06',
    image: 'https://placehold.co/110x75/000000/FFFFFF.png'
  },
  {
    id: '7',
    title: 'Trending Post 7',
    content: 'Content 7',
    author: 'Author 7',
    createdAt: '2023-10-07',
    image: 'https://placehold.co/110x75/000000/FFFFFF.png'
  },
  {
    id: '8',
    title: 'Trending Post 8',
    content: 'Content 8',
    author: 'Author 8',
    createdAt: '2023-10-08',
    image: 'https://placehold.co/110x75/000000/FFFFFF.png'
  },
  {
    id: '9',
    title: 'Trending Post 9',
    content: 'Content 9',
    author: 'Author 9',
    createdAt: '2023-10-09',
    image: 'https://placehold.co/110x75/000000/FFFFFF.png'
  },
  {
    id: '10',
    title: 'Trending Post 10',
    content: 'Content 10',
    author: 'Author 10',
    createdAt: '2023-10-10',
    image: 'https://placehold.co/110x75/000000/FFFFFF.png'
  }
]

export const postTrendingHandler = [
  http.get(`${appEnv.VITE_BASE_API_URL}/api/v1/posts/trending`, () => {
    const trending = trendingPosts.slice(0, 5)
    return HttpResponse.json(trending)
  })
]
