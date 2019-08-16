import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css';
import qs from 'qs'
import './registerServiceWorker'
import Element from 'element-ui'

Vue.use(Element)

Vue.prototype.$axios = axios
Vue.prototype.qs = qs

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
