import type { PostTop } from '../../post.types'
import { appEnv } from '@/shared/helpers/environment'
import { faker } from '@faker-js/faker'
import { http, HttpResponse } from 'msw'

const topPosts: PostTop[] = [
  {
    id: '1',
    title: faker.lorem.sentence(),
    content: faker.lorem.paragraphs(),
    author: faker.person.fullName(),
    createdAt: faker.date.past().toISOString(),
    image: faker.image.url()
  },
  {
    id: '2',
    title: faker.lorem.sentence(),
    content: faker.lorem.paragraphs(),
    author: faker.person.fullName(),
    createdAt: faker.date.past().toISOString(),
    image: faker.image.url()
  },
  {
    id: '3',
    title: faker.lorem.sentence(),
    content: faker.lorem.paragraphs(),
    author: faker.person.fullName(),
    createdAt: faker.date.past().toISOString(),
    image: faker.image.url()
  },
  {
    id: '4',
    title: faker.lorem.sentence(),
    content: faker.lorem.paragraphs(),
    author: faker.person.fullName(),
    createdAt: faker.date.past().toISOString(),
    image: faker.image.url()
  },
  {
    id: '5',
    title: faker.lorem.sentence(),
    content: faker.lorem.paragraphs(),
    author: faker.person.fullName(),
    createdAt: faker.date.past().toISOString(),
    image: faker.image.url()
  },
  {
    id: '6',
    title: faker.lorem.sentence(),
    content: faker.lorem.paragraphs(),
    author: faker.person.fullName(),
    createdAt: faker.date.past().toISOString(),
    image: faker.image.url()
  }
]

export const postTopHandler = [
  http.get(`${appEnv.VITE_BASE_API_URL}/api/v1/posts/top`, () => {
    return HttpResponse.json(topPosts)
  })
]
