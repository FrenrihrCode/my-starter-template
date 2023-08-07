import { createApp } from 'vue';
import App from './App.vue';
import type { AppModule } from './modules/types';
import './styles/main.css';
import 'floating-vue/dist/style.css'

const app = createApp(App);
Object.values(import.meta.glob<{ install: AppModule }>('./modules/*.ts', { eager: true })).forEach(
  (i) => i.install?.(app)
);
app.mount('#app');
