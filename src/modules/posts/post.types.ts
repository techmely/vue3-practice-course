export interface PostHighlight {
  id: string
  title: string
  description: string
  image: string
  createdAt: Date
  updatedAt: Date
}

export interface PostRecent {
  id: string
  title: string
  content: string
  author: string
  createdAt: string
  image: string
}

export interface PostTop {
  id: string
  title: string
  content: string
  author: string
  createdAt: string
  image: string
}

export interface PostTrending {
  id: string
  title: string
  content: string
  author: string
  createdAt: string
  image: string
}
