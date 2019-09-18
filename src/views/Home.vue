<template>
  <div class="home vh-100 vw-100">
    <div class="d-flex h-100 w-100">
      <SideNav></SideNav>
      <main class="h-100 w-100 bg-dark">
        <Logo class="logo m-2"></Logo>
				<div class="right d-flex justify-content-center align-items-center m-2">
					<button v-if="user" @click="showProfile = true" class="user btn px-4 _rounded shadow-sm">
						{{user.name}}
					</button>
					<button @click="showLogin = true" class="login btn btn-dark px-4 ml-2 _rounded shadow-sm">Login</button>
				</div>
      </main>
    </div>
    <Login @close="showLogin = false" @logged="logged" v-if="showLogin" class="login-container h-100 w-100"></Login>
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
      showLogin: false,
			showProfile: false,
			user: null,
    }
  },
	methods: {
		logged(user) {
			console.log("Usuário:", user)
			this.user = user;
		}
	}
};
</script>

<style scoped>
.right {
  position: absolute;
  right: 0;
  top: 0
}

.user {
	background-color: #00adb5;
	color: #fff;
	font-weight: 500
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
	background-position: center;
	/* background-size: cover; */
	background-repeat: none;
  position: relative;
}
</style>
