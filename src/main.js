// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
Vue.use(ElementUi);


import '../src/assets/css/admin.css'

Vue.config.productionTip = false

Vue.prototype.$http = axios;
Vue.prototype.router = router;

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
