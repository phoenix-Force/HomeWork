import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import {routes} from "./routes.js"
import VueRouter from 'vue-router'
import 'element-ui/lib/theme-chalk/index.css';
import 'element-theme-dark';
import locale from 'element-ui/lib/locale'
import Vuelidate from 'vuelidate'
import vuex from 'vuex'
import store from "./store/Store.js"





Vue.use(Vuelidate)
Vue.use(VueRouter,{ locale })
Vue.use(ElementUI)
Vue.use(vuex)

const router = new VueRouter({
  mode: 'history',
  routes
});


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
