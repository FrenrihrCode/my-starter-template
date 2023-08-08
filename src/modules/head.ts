import { createHead } from '@vueuse/head';
import type { AppModule } from './types';
import { PROJECT_NAME } from '~/constants';

export const install: AppModule = (app) => {
  const head = createHead({
    title: PROJECT_NAME,
  });
  app.use(head);
};
