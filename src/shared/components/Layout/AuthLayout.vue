<script setup lang="ts">
import TopNavbar from '@/modules/account/components/TopNavbar.vue'
</script>

<template>
  <div id="auth-layout" class="flex flex-col container min-h-screen">
    <TopNavbar />
    <main class="flex flex-col flex-1 gap-4 py-4 lg:gap-6 lg:py-6">
      <slot />
    </main>
  </div>
</template>
