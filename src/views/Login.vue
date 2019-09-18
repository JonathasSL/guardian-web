<template lang="html">
	<div class="login h-100 w-100 d-flex flex-column justify-content-center align-items-center">
		<h1 class="exit mb-0 mt-3 mr-4" @click="close">
			X
		</h1>
		<form v-if="isLogin" class="form-login" @submit.prevent="login">
			<p v-show="loginFailed" class="text-center text-danger"><b>E-mail ou senha incorretos :(</b></p>
			<div class="form-row">
		    <div class="form-group col-md-12">
		      <label for="email">Email</label>
		      <input v-model="form.login.email" type="email" required class="form-control form-control-lg" id="email" placeholder="douglas@exemplo.com">
		    </div>
		    <div class="form-group col-md-12">
		      <label for="password">Senha</label>
		      <input v-model="form.login.password" type="password" required class="form-control form-control-lg" id="password" placeholder="******">
		    </div>
  		</div>
		  <button type="submit" class="btn btn-info btn-block btn-lg">Login</button>
		</form>
		<form v-else class="form-register" @submit.prevent="register">
			<div class="form-group">
				<label for="name">Nome</label>
				<input v-model="form.register.name" type="text" required class="form-control" id="name" placeholder="Douglas Adams da Silva Jr.">
			</div>
			<div class="form-row">
				<div class="form-group col-md-6">
					<label for="email">Email</label>
					<input v-model="form.register.email" type="email" required class="form-control" id="email" placeholder="douglas@exemplo.com">
				</div>
				<div class="form-group col-md-6">
					<label for="password">Senha</label>
					<input v-model="form.register.password" type="password" required class="form-control" id="password" placeholder="******">
				</div>
			</div>
			<div class="form-row">
				<div class="form-group col-md-6">
					<label for="cpf">CPF</label>
					<input v-model.number="form.register.cpf" type="number" class="form-control" id="cpf" placeholder="12345678900">
				</div>
				<div class="form-group col-md-6">
					<label for="phone">Telefone</label>
					<input v-model.number="form.register.phone_number" type="number" class="form-control" id="phone" placeholder="42987654321">
				</div>
			</div>
			<button type="submit" class="btn btn-info btn-block btn-lg">Cadastrar</button>
		</form>
		<button type="button" class="btn btn-link mt-4" @click="isLogin = !isLogin">
			{{isLogin ? 'Ainda não possuo cadastro' : 'Já possuo cadastro'}}
		</button>
	</div>
</template>

<script>
// TODO: verify if has a away to do this import as global
// Axios
import axios from 'axios';
// BUGFIX: same Vue CLI Service URL for CORS with Cue CLI proxy (look at "vue.config.js" file)
axios.defaults.baseURL = 'http://localhost:4242';

export default {
	name: 'login',
	data() {
		return {
			isLogin: true,
			loginFailed: false,
			form: {
				login: {
					email: null,
					password: null
				},
				register: {
					email: null,
					password: null
				},
			},
		}
	},
	methods: {
		close() {
			this.$emit('close');
		},

		login () {
			axios.get('/api/driver')
				.then(response => {
					let drivers = response.data;

					if (drivers.length > 0) {
						let success = drivers.find(driver => {
							return driver.email == this.form.login.email && driver.password == this.form.login.password
						});

						if (success) {
							this.$emit('logged', success);
							this.$emit('close');
							this.$destroy();
						} else {
							this.loginFailed = true;
						}
					}
				})
				.catch(console.log)
		},

		register () {
			axios.post('/api/driver', this.form.register)
				.then(response => {
					console.log(response);
				})
				.catch(console.log)
		},
	}
};
</script>

<style lang="css" scoped>
.login {
	background-color: #fff;
}

.exit {
	position: absolute;
	right: 0;
	top: 0;
	font-weight: 900;
	transition: .3s;
	cursor: pointer;
}

.exit:hover {
	color: indianred
}
</style>
