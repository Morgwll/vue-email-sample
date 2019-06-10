import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import "./scss/style.scss";

Vue.use(VueRouter);

new Vue({
  el: "#app",
  render: h => h(App)
});
