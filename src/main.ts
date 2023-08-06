import { createApp } from 'vue';

import App from './App.vue';
import './styles/main.css';
import type { AppModule } from './modules/types';

// https://github.com/antfu/vite-ssg
// export const createApp(
//   App,
//   { routes, base: import.meta.env.BASE_URL },
//   (ctx) => {
//     // install all modules under `modules/`
//     Object.values(import.meta.glob<{ install: UserModule }>('./modules/*.ts', { eager: true }))
//       .forEach(i => i.install?.(ctx))
//     // ctx.app.use(Previewer)
//   },
// )

const app = createApp(App);
Object.values(import.meta.glob<{ install: AppModule }>('./modules/*.ts', { eager: true })).forEach(
  (i) => i.install?.(app)
);
app.mount('#app');
