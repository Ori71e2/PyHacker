// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'element-ui/lib/theme-default/index.css'
import 'src-assets/css/theme-default.scss'

import Element from "element-ui";
import Vue from 'vue'
import App from './index'
import axios from './util/ajax'
import router from './router'

import './components/platform/install.js'
Vue.config.productionTip = false
 
Vue.use(ElementUI) 

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
