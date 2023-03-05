<script setup>

</script>

<template>
  <nav class="flex justify-between px-10 py-3 items-center bg-white">
    <span class="self-center whitespace-nowrap text-m text-gray-800 font-semibold">Home Hub</span>
    <div class="flex items-center">
      <ul class="flex items-center text-gray-700 text-sm">
        <slot />
      </ul>
    </div>
  </nav>
</template>