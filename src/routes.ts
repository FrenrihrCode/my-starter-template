import type { RouteRecordRaw } from 'vue-router';

// pages
const NotFound = () => import('./pages/[...all].vue');
const Home = () => import('./pages/index.vue');
const HiName = () => import('./pages/hi/[name].vue');

// layouts
const NotFoundLayout = () => import('./layouts/404.vue');

export const routes: RouteRecordRaw[] = [
  { path: '/', component: Home },
  { path: '/hi/:name', component: HiName, props: true },
  {
    path: '/:pathMatch(.*)*',
    component: NotFoundLayout,
    children: [{ path: '', component: NotFound, name: 'NotFound' }],
  },
];
