import { createRouter, createWebHistory } from 'vue-router';
import type { AppModule } from './types';
import { routes } from '~/routes';

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export const install: AppModule = (app) => {
  app.use(router);
};
