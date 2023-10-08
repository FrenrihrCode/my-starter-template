import { createApp } from 'vue';
import App from './App.vue';
import './shared/styles/main.css';
import 'floating-vue/dist/style.css';
import type { AppModule } from './shared/dependencies/types';

const app = createApp(App);
Object.values(
  import.meta.glob<{ install: AppModule }>('./shared/dependencies/*.ts', { eager: true })
).forEach((i) => i.install?.(app));
app.mount('#app');
