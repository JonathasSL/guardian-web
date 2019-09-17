// --- IMPORTS ---
// Essentials
import Vue from 'vue';
import router from './router';
import store from './store';

// Root component
import App from './App.vue';

// Prevent the production tip on Vue startup
Vue.config.productionTip = false;

// --- INITIALIZATION ---
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
