<script setup lang="ts">
const { authModal } = storeToRefs(useGlobalStore())
</script>

<template>
  <div class="flex flex-col">
    <TopNavbar />

    <main class="flex flex-col flex-1 gap-4 p-4 lg:gap-6 lg:p-6">
      <div class="flex items-center">
        <h1 class="text-lg font-semibold md:text-2xl">{{ authModal.isOpen }}</h1>
      </div>
      <slot />
    </main>
  </div>
</template>
