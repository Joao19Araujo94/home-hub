<script setup>
  import { RouterView } from 'vue-router'
  import { useAuth0 } from "@auth0/auth0-vue";
  import LoginButton from './components/buttons/login-button.vue'
  import NavOption from './components/navbar/nav-option.vue'
  import Navbar from './components/navbar/navbar.vue'
  import NavUser from './components/navbar/nav-user.vue'
  import Footer from './components/footer/footer.vue'

  const { isAuthenticated, user } = useAuth0();
  const isUserAdmin = () => {
    return user.value.profile ? user.value.profile.includes('admin') : false
  }
</script>

<template>
  <div class="relative min-h-screen">
    <Navbar>
      <template v-if="isAuthenticated">
        <NavOption path="/dashboard" text="Dashboard"/>
        <NavOption path="/expenses" text="Expenses"/>
        <NavOption path="/devices" text="Devices"/>
        <NavUser/>
      </template>
      <template v-else>
        <NavOption path="/" text="Home"/>
        <NavOption path="/about" text="About"/>
        <NavOption>
          <LoginButton />
        </NavOption>
      </template>
    </Navbar >
    <div id="content" class="border pb-10" >
      <RouterView />
    </div>
    <Footer/>
  </div>
</template>