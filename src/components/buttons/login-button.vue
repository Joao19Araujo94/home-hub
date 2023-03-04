<script setup>
  import { useAuth0 } from "@auth0/auth0-vue"

  const { loginWithRedirect } = useAuth0()

  const handleLogin = () => {
    loginWithRedirect({
      appState: {
        target: "/profile"
      }
    })
  }
</script>

<template>
  <button type="button" class="rounded-full bg-green-200" @click="handleLogin()">Log In</button>
</template>