<script setup lang="ts">
import { TiptapEditor } from '@/shared/components/ui/editor'

const content = ref('')

const handleSavePost = () => {
  console.log(content.value)
}

</script>

<template>
  <div class="container mx-auto">
    <h1>Create Post</h1>
    <TiptapEditor v-model="content" />

    <Button @click="handleSavePost">
      Save post
    </Button>
  </div>
</template>
