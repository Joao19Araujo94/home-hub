<script setup>
import { useAuth0 } from "@auth0/auth0-vue";

const { logout } = useAuth0();

const handleLogout = () =>
  logout({
    logoutParams: {
      returnTo: window.location.origin,
    }
  });
</script>

<template>
  <button class="rounded-full bg-red-200" @click="handleLogout">Log Out</button>
</template>