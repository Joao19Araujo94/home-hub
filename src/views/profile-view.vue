<script setup>
  import { useAuth0 } from "@auth0/auth0-vue";
  const { user } = useAuth0();
</script>

<template>
  <div class="bg-yellow-800 text-white">
    Profile
  </div>
  <div>
    Welcome {{ user.nickname }}!
    <img class="rounded" :src="user.picture"/>
  </div>
</template>