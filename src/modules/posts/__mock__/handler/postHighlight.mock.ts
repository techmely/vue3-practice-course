import type { PostHighlight } from '../../post.types'
import { appEnv } from '@/shared/helpers/environment'
import { faker } from '@faker-js/faker'
import { http, HttpResponse } from 'msw'

export const postHighlightHandler = [
  http.get(`${appEnv.VITE_BASE_API_URL}/api/v1/posts/highlight`, () => {
    const posts: PostHighlight[] = [
      {
        id: 'c7b3d8e0-5e0b-4b0f-8b3a-3b9f4b3d3b3d',
        title: 'Go: Small Memory Efficiency',
        description:
          'Go (often referred to as Golang) is designed with a focus on simplicity, efficiency, and performance.',
        image: faker.image.url(),
        createdAt: faker.date.past(),
        updatedAt: faker.date.past()
      },
      {
        id: 'd1e2f3a4-5b6c-7d8e-9f0a-1b2c3d4e5f6g',
        title: 'Monkey patching in Python',
        description:
          'Monkey patching is a technique to extend or modify the runtime code of dynamic languages without altering the original source code.',
        image: 'https://placehold.co/400x200/000000/FFFFFF.png',
        createdAt: faker.date.past(),
        updatedAt: faker.date.past()
      },
      {
        id: 'h7i8j9k0-1l2m-3n4o-5p6q-7r8s9t0u1v2w',
        title: 'Tauri under the hood',
        description:
          'Tauri is a framework for building tiny, fast binaries for all major desktop platforms.',
        image: 'https://placehold.co/400x200/000000/FFFFFF.png',
        createdAt: faker.date.past(),
        updatedAt: faker.date.past()
      },
      {
        id: 'x3y4z5a6-7b8c-9d0e-1f2g-3h4i5j6k7l8m',
        title: 'Partial application in Javascript',
        description:
          'Partial application refers to the process of fixing a number of arguments to a function, producing another function of smaller arity.',
        image: 'https://placehold.co/400x200/000000/FFFFFF.png',
        createdAt: faker.date.past(),
        updatedAt: faker.date.past()
      },
      {
        id: 'n9o0p1q2-3r4s-5t6u-7v8w-9x0y1z2a3b4c',
        title: 'Introduce Javascript Event Loop for newbie',
        description:
          'JavaScript has a runtime model based on an event loop, which is responsible for executing the code, collecting and processing events.',
        image: 'https://placehold.co/400x200/000000/FFFFFF.png',
        createdAt: faker.date.past(),
        updatedAt: faker.date.past()
      }
    ]
    return HttpResponse.json(posts)
  })
]
