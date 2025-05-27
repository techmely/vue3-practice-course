<script setup lang="ts">
  import { useEditor, EditorContent } from '@tiptap/vue-3'
  import StarterKit from '@tiptap/starter-kit'

  const emits = defineEmits<{
    (e: 'update:modelValue', value: string): void
  }>()

  const editor = useEditor({
    content: "<p>I'm running Tiptap with Vue.js. 🎉</p>",
    extensions: [
      StarterKit,
    ],
    editorProps: {
      attributes: {
        class: 'prose prose-sm sm:prose-base lg:prose-lg xl:prose-2xl m-5 focus:outline-none',
      },
    },
  })

  onMounted(() => {
    editor.value?.on('update', ({ editor }) => {
      emits('update:modelValue', editor.getHTML())
    })
  })

</script>

<template>
  <editor-content :editor="editor" class="border border-blue-500 rounded-md" />
</template>

