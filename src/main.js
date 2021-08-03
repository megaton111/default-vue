import Vue from 'vue'
import App from './App.vue'
import router from './router/index'; 

Vue.config.productionTip = false;

import "@/assets/scss/_index.scss" ; 

new Vue({
  router , 
  render: h => h(App),
}).$mount('#app')
