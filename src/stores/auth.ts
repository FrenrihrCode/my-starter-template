import { acceptHMRUpdate, defineStore } from 'pinia';
import { authService } from '~/services/auth.service';

export const useAuthStore = defineStore('auth', () => {
  const isLogged = ref(false);

  const login = async (username: string, password: string) => {
    await authService.login({ username, password });
    isLogged.value = true;
  };

  return { isLogged, login };
});

if (import.meta.hot) import.meta.hot.accept(acceptHMRUpdate(useUserStore as any, import.meta.hot));
