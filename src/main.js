import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import User from './User.vue';
import Home from './Home.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/user', component: User},
  { path: '/', component: Home}
]

const router = new VueRouter({
  routes,
  mode: 'history'
})



new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
