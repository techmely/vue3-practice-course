<script setup lang="ts">
import { usePostHighlight } from '@/modules/posts/composables/usePostHighlight'
import { usePostRecent } from '@/modules/posts/composables/usePostRecent'
import { usePostTop } from '@/modules/posts/composables/usePostTop'
import { usePostTrending } from '@/modules/posts/composables/usePostTrending'

const { data: postHighlight, isLoading: isLoadingPostHighlight } = usePostHighlight()
const { data: postRecent, isLoading: isLoadingPostRecent } = usePostRecent()
const { data: postTop, isLoading: isLoadingPostTop } = usePostTop()
const { data: postTrending, isLoading: isLoadingPostTrending } = usePostTrending()
</script>

<template>
  <main class="container mx-auto px-4 py-8">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div class="md:col-span-2 space-y-8">
        <div v-if="isLoadingPostHighlight">
          <Skeleton class="w-full h-[400px]" />
        </div>
        <section v-else id="post-highlight">
          <Card>
            <CardContent class="p-0">
              <img
                :src="postHighlight?.bestHighlight?.image"
                width="800"
                height="400"
                alt="Go mascot"
                class="w-full h-[400px] object-cover"
              />
              <div class="p-6">
                <h2 class="text-2xl font-bold mb-2">
                  {{ postHighlight?.bestHighlight?.title }}
                </h2>
                <p class="text-gray-600">
                  {{ postHighlight?.bestHighlight?.description }}
                </p>
              </div>
            </CardContent>
          </Card>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card v-for="post in postHighlight?.highlights" :key="post.id">
              <CardContent class="p-0">
                <img
                  :src="post.image"
                  width="400"
                  height="200"
                  alt="Python logo"
                  class="w-full h-[200px] object-cover"
                />
                <div class="p-4">
                  <h3 class="font-bold">
                    {{ post.title }}
                  </h3>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <div class="space-y-4">
          <div v-for="num in [1, 2, 3, 4, 5, 6]" :key="num" class="flex items-center space-x-2">
            <span class="text-2xl font-bold text-gray-300">#{{ num }}</span>
            <div>
              <h3 class="font-bold">Article Title {{ num }}</h3>
              <p class="text-sm text-gray-600">Author Name</p>
            </div>
          </div>
        </div>

        <Card>
          <CardContent class="p-6">
            <div class="flex items-center space-x-4 mb-4">
              <img
                src="https://placehold.co/50x50/000000/FFFFFF.png"
                width="50"
                height="50"
                alt="Event Loop"
                class="w-12 h-12 rounded"
              />
              <div>
                <h3 class="font-bold">Introduce Javascript Event Loop for newbie</h3>
                <p class="text-sm text-gray-600">
                  JavaScript has a runtime model based on an event loop, which is responsible for
                  executing the code, collecting and processing events.
                </p>
              </div>
            </div>
            <div class="flex items-center space-x-2">
              <img
                src="https://placehold.co/30x30/000000/FFFFFF.png"
                width="30"
                height="30"
                alt="Author avatar"
                class="w-6 h-6 rounded-full"
              />
              <span class="text-sm text-gray-600">Anonymous</span>
              <span class="text-sm text-gray-400">4 months ago</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div class="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Recent Posts</CardTitle>
          </CardHeader>
          <CardContent>
            <ul class="space-y-4">
              <li
                v-for="num in [1, 2, 3, 4, 5, 6, 7, 8]"
                :key="num"
                class="flex items-start space-x-2"
              >
                <img
                  src="https://placehold.co/60x60/000000/FFFFFF.png"
                  width="60"
                  height="60"
                  alt="Post {{ num }}"
                  class="w-16 h-16 object-cover rounded"
                />
                <div>
                  <h4 class="font-bold">Post Title {{ num }}</h4>
                  <p class="text-sm text-gray-600">a month ago</p>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Trending Articles</CardTitle>
          </CardHeader>
          <CardContent>
            <ul class="space-y-2">
              <li v-for="num in [1, 2, 3, 4, 5]" :key="num" class="flex items-center space-x-2">
                <img
                  src="https://placehold.co/40x40/000000/FFFFFF.png"
                  width="40"
                  height="40"
                  alt="Author {{ num }}"
                  class="w-8 h-8 rounded-full"
                />
                <div>
                  <h4 class="font-bold">Trending Article {{ num }}</h4>
                  <p class="text-sm text-gray-600">4 months ago</p>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  </main>
</template>
