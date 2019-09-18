<template>
  <div class="home vh-100 vw-100">
    <div class="d-flex h-100 w-100">
      <!-- <SideNav></SideNav> -->
      <main class="h-100 w-100 bg-dark">
        <Logo class="logo m-2"></Logo>
				<div class="right d-flex justify-content-center align-items-center m-2">
					<div v-if="user" class="btn-group _rounded shadow-sm" role="group">
					  <button @click="showVehicleList = true" type="button" class="cars btn _rounded-tl _rounded-bl ">
							<img src="@/assets/icon/car.svg" alt="">
						</button>
						<button class="user btn px-4 _rounded-tr _rounded-br shadow-sm">
							{{user.name}}
						</button>
					</div>
					<button @click="showLogin = true" class="login btn btn-dark px-4 ml-2 _rounded">Login</button>
				</div>
      </main>
    </div>
    <Login @close="showLogin = false" @logged="logged" v-if="showLogin" class="login-container h-100 w-100"></Login>
    <VehicleList @close="showVehicleList = false" v-if="showVehicleList" :userId="this.user.id" class="vehicle-list-container h-100 w-100"></VehicleList>
  </div>
</template>

<script>
// @ is an alias to /src
import Logo from '@/components/Logo.vue';
import SideNav from '@/components/SideNav.vue';
import Login from '@/views/Login.vue';
import VehicleList from '@/components/VehicleList.vue';

export default {
  name: 'home',
  components: {
    Logo,
    SideNav,
    Login,
		VehicleList,
  },
  data() {
    return {
      showLogin: false,
			showVehicleList: false,
			showCars: false,
			user: null,
    }
  },
	methods: {
		logged(user) {
			console.log("Usuário:", user)
			this.user = user;
		},

		create() {

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

.cars {
	background-color: #fff;
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

.login-container, .vehicle-list-container {
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
