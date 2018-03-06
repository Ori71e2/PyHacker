// Router Control
// {
//    path: Router Path,
//    components: r => require.ensure([], () => r(require('Router Page')), 'Filename Packed')
//
import Vue from 'vue'
import VueRouter from 'vue-router'
import store from 'src-store'
import Cookies from 'js-cookie'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import whiteList from './direct-access'
import asyncRouter from './async-router'

