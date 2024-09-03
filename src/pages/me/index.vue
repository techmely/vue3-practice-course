<script setup lang="ts">
const { user } = storeToRefs(useUserStore())
</script>

<template>
  <h1 class="text-3xl">
    Hello {{ user?.email }}
  </h1>
  <h2>
    Your name is {{ user?.displayName }}
  </h2>
</template>