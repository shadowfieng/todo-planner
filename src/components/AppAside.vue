<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'
import { PATHS } from '../router/paths'

const route = useRoute()
</script>
<template>
  <aside class="w-1/5 p-4">
    <div class="flex items-center gap-4">
      <h1>Todo planner</h1>
      <RouterLink active-class="text-red" :to="PATHS.HOME.value">
        <img src="/logo.svg" width="48" />
      </RouterLink>
    </div>
    <nav>
      <ul>
        <li v-bind:key="path.value" v-for="path of PATHS">
          <RouterLink :class="path.value === route.path ? 'text-blue-700' : ''" :to="path.value">{{
            path.name
          }}</RouterLink>
        </li>
      </ul>
    </nav>
  </aside>
</template>
