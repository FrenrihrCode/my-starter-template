import { createPinia } from 'pinia';
import type { AppModule } from './types';

// Setup Pinia
// https://pinia.vuejs.org/
export const install: AppModule = (app) => {
  const pinia = createPinia();
  app.use(pinia);
};
