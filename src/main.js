import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { store } from './data/store.js'
import { routes } from './routes.js'
import './scss/style.scss'

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
