import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'TransportOrderList',
    component: () => import('../components/TransportOrderList.vue'),
  },
  {
    path: '/create',
    name: 'TransportOrderForm',
    component: () => import('../components/TransportOrderForm.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;