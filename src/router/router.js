import { createRouter, createWebHistory } from 'vue-router';
import Privacy from '../page/Privacy/index.vue';
import lamenu from '../page/Home/index.vue'




const routes = [
  { path: '/privacy', component: Privacy },
  { path: '/', component: lamenu },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
