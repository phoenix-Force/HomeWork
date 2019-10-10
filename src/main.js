import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import {routes} from "./routes.js"
import VueRouter from 'vue-router'
import 'element-ui/lib/theme-chalk/index.css';
import 'element-theme-dark';


Vue.use(VueRouter)
Vue.use(ElementUI)
const router = new VueRouter({
  mode: 'history',
  routes
});


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
