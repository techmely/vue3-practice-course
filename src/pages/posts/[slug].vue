<script setup lang="ts">

const route = useRoute()
</script>

<template>
  <div>
    <h1>Post {{ route.params }}</h1>
  </div>
</template>
