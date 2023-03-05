<script setup>
  import { RouterLink } from 'vue-router'

  const props = defineProps({
    path: String,
    text: String
  })
</script>

<template>
  <li class ="py-2.5 px-3 mr-2 text-gray-900 bg-white rounded-lg hover:text-blue-700">
    <slot><RouterLink :to="path" >{{ text }}</RouterLink></slot>
  </li>
</template>