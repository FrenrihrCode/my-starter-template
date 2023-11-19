import { createHead } from '@vueuse/head';
import type { AppModule } from './types';
import { PROJECT_NAME } from '~/modules/app/constants';

export const install: AppModule = (app) => {
  const head = createHead({
    title: PROJECT_NAME,
  });
  app.use(head);
};
