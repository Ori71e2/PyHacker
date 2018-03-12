// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'element-ui/lib/theme-default/index.css'
import 'src-assets/css/theme-default.scss'

import Element from "element-ui";
import Vue from 'vue'
import App from './index'
import store from './store'
import axios from './util/ajax'
import router from './router'
import i18n from './util/i18n'


import './components/platform/install.js'
Vue.config.productionTip = false
 
Vue.prototype.$axios = axios;
Vue.use(ElementUI) 

/* eslint-disable no-new */

new Vue({
  axios,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
/*
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
*/
