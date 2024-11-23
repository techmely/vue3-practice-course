import { sleep } from '@techmely/es-toolkit'
import httpClient from '@/libs/httpClient'
import type { PostHighlight, PostRecent, PostTop, PostTrending } from '../post.types'

export async function getPostHighlight() {
  const response = await httpClient.get('api/v1/posts/highlight')
  const data = (await response.json()) as PostHighlight[]
  await sleep(300)
  return data
}

export async function getPostRecent() {
  const response = await httpClient.get('api/v1/posts/recent')
  const data = (await response.json()) as PostRecent[]
  await sleep(250)
  return data
}

export async function getPostTop() {
  const response = await httpClient.get('api/v1/posts/top')
  const data = (await response.json()) as PostTop[]

  await sleep(200)
  return data
}

export async function getPostTrending() {
  const response = await httpClient.get('api/v1/posts/trending')
  const data = (await response.json()) as PostTrending[]

  await sleep(100)
  return data
}
