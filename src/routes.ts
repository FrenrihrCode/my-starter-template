import type { RouteRecordRaw } from 'vue-router';

// pages
const NotFound = () => import('./shared/pages/[...all].vue');
const Home = () => import('./shared/pages/index.vue');
const HiName = () => import('./shared/pages/hi/[name].vue');

// layouts
const NotFoundLayout = () => import('./shared/layouts/404.vue');

export const routes: RouteRecordRaw[] = [
  { path: '/', component: Home },
  { path: '/hi/:name', component: HiName, props: true },
  {
    path: '/:pathMatch(.*)*',
    component: NotFoundLayout,
    children: [{ path: '', component: NotFound, name: 'NotFound' }],
  },
];
