<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import LoginButton from './components/buttons/login-button.vue'
  import LogoutButton from './components/buttons/logout-button.vue'
  import { useAuth0 } from "@auth0/auth0-vue";

  const { isAuthenticated, user } = useAuth0();

  const isUserAdmin = () => {
    return user.value.profile ? user.value.profile.includes('admin') : false
  }
</script>

<template>
  <div>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink v-if="isAuthenticated" to="/profile">Profile</RouterLink>
      <template v-if="!isAuthenticated">
        <LoginButton />
      </template>
      <template v-if="isAuthenticated">
        <RouterLink v-if="isAuthenticated && isUserAdmin()" to="/admin">Admin</RouterLink>
        <LogoutButton />
      </template>
    </nav>
  </div>
  <RouterView />
</template>