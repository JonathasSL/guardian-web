<template lang="html">
	<div class="login h-100 w-100 d-flex flex-column justify-content-center align-items-center">
		<h1 class="exit mb-0 mt-3 mr-4" @click="close">
			X
		</h1>
		<form v-if="isLogin" class="form-login" @submit.prevent="login">
			<div class="form-row">
		    <div class="form-group col-md-12">
		      <label for="email">Email</label>
		      <input v-model="form.login.email" type="email" class="form-control form-control-lg" id="email" placeholder="douglas@exemplo.com">
		    </div>
		    <div class="form-group col-md-12">
		      <label for="password">Senha</label>
		      <input v-model="form.login.password" type="password" class="form-control form-control-lg" id="password" placeholder="******">
		    </div>
  		</div>
		  <button type="submit" class="btn btn-info btn-block btn-lg">Login</button>
		</form>
		<form v-else class="form-register" @submit.prevent="register">
			<div class="form-group">
				<label for="name">Nome</label>
				<input v-model="form.register.name" type="text" class="form-control" id="name" placeholder="Douglas Adams da Silva Jr.">
			</div>
			<div class="form-row">
				<div class="form-group col-md-6">
					<label for="email">Email</label>
					<input v-model="form.register.email" type="email" class="form-control" id="email" placeholder="douglas@exemplo.com">
				</div>
				<div class="form-group col-md-6">
					<label for="password">Senha</label>
					<input v-model="form.register.password" type="password" class="form-control" id="password" placeholder="******">
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
export default {
	name: 'login',
	data() {
		return {
			isLogin: true,
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
			console.log(this.form.login)
		},

		register () {
			console.log(this.form.register)
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
