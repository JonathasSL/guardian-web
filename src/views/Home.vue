<template>
  <div class="home vh-100 vw-100">
    <div class="d-flex h-100 w-100">
      <SideNav></SideNav>
      <main class="h-100 w-100 bg-dark">
        <Logo class="logo m-2"></Logo>
        <button @click="showLogin = true" class="login btn btn-dark px-4 m-2 _rounded">Login</button>
      </main>
    </div>
    <Login @close="showLogin = false" v-if="showLogin" class="login-container h-100 w-100"></Login>
  </div>
</template>

<script>
// @ is an alias to /src
import Logo from '@/components/Logo.vue';
import SideNav from '@/components/SideNav.vue';
import Login from '@/views/Login.vue';

export default {
  name: 'home',
  components: {
    Logo,
    SideNav,
    Login,
  },
  data() {
    return {
      showLogin: false
    }
  }
};
</script>

<style scoped>
.login {
  position: absolute;
  right: 0;
  top: 0
}

.logo {
  position: absolute;
  top: 0;
  left: 0
}

.login-container {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99999999
}

main {
  background-image: url('~@/assets/img/map.png');
  position: relative;
}
</style>
