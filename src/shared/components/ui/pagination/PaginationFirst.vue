<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue'
import { PaginationFirst, type PaginationFirstProps } from 'radix-vue'
import { ChevronsLeft } from 'lucide-vue-next'
import { Button } from '@/shared/components/ui/button'
import { cn } from '@/shared/helpers/className'

const props = withDefaults(
  defineProps<PaginationFirstProps & { class?: HTMLAttributes['class'] }>(),
  {
    asChild: true
  }
)

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <PaginationFirst v-bind="delegatedProps">
    <Button :class="cn('w-10 h-10 p-0', props.class)" variant="outline">
      <slot>
        <ChevronsLeft class="h-4 w-4" />
      </slot>
    </Button>
  </PaginationFirst>
</template>
