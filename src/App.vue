<script setup lang="ts">
import { VueQueryDevtools } from '@tanstack/vue-query-devtools'

</script>

<template>
  <AuthLayout>
    <RouterView v-slot="{ Component, route }">
      <Suspense v-if="Component" :timeout="0">
        <Component :is="Component" :key="route.name"></Component>

        <template #fallback>
          <span>Loading ..</span>
        </template>
      </Suspense>
    </RouterView>
  </AuthLayout>
  <VueQueryDevtools />
</template>
