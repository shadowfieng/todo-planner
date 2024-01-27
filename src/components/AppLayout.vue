<script setup lang="ts">
import AppAside from './AppAside.vue'
</script>
<template>
  <div class="flex h-dvh">
    <AppAside />
    <div class="flex-grow">
      <header>header</header>
      <main><slot /></main>
    </div>
  </div>
</template>
