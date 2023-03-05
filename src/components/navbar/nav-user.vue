<script setup>
  import { ref } from 'vue'
  import { useAuth0 } from "@auth0/auth0-vue"
  import { RouterView } from 'vue-router'
  import LogoutButton from '../buttons/logout-button.vue'

  const { user } = useAuth0();

  const isOpen = ref(false)
</script>

<template>
  <div class="relative">
    <button @click="isOpen = !isOpen" class="relative text-sm bg-gray-800 rounded-full z-10 mt-1 ml-4">
      <img class="w-8 h-8 rounded-full" :src="user.picture" alt="user photo">
    </button>
    <button v-if="isOpen" @click="isOpen = false" tabindex="-1" class="fixed w-full h-full cursor-default inset-0"></button>
    <div v-if="isOpen" class="right-0 mt-1.5 py-2 absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-xl w-44 border">
        <div class="px-4 py-3 text-xs text-gray-900 dark:text-white">
          <div>{{user.nickname}}</div>
          <div class="font-medium truncate">{{user.email}}</div>
        </div>
        <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownUserAvatarButton">
          <li>
            <RouterLink @click="isOpen = !isOpen" to="/profile" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Profile</RouterLink>
          </li>
          <li>
            <RouterLink @click="isOpen = !isOpen" to="/settings" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</RouterLink>
          </li>
        </ul>
        <LogoutButton/>
    </div>
  </div>
</template>