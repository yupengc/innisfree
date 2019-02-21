import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios"
import Header from './components/Header.vue'

Vue.config.productionTip = false;

Vue.prototype.axios=axios;
//引入全局组件
Vue.component("my-header",Header);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


