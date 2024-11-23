<script setup lang="ts">
const { user } = storeToRefs(useUserStore())
</script>

<template>
  <div v-if="!user">
    <h1 class="text-3xl">You are not logged in</h1>
  </div>
  <div v-else>
    <h1 class="text-3xl">Hello {{ user?.email }}</h1>
    <h2>Your name is {{ user?.displayName }}</h2>
  </div>
</template>
