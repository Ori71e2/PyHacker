import Vue from 'vue';
import App from 'App';
import VueRouter from 'vue-router';
import Element from 'element-ui';
import MainHeader from './components/header/header.vue';
import MainFooter from './components/footer/footer.vue';

Vue.use(Element);
Vue.use(VueRouter);
Vue.component('main-header', MainHeader);
Vue.component('main-footer', MainFooter);
