import { AuthService } from 'auth/services/auth.service';
import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', () => {
  const jwt = useLocalStorage<string>('jwt', '');
  const service = new AuthService({ token: jwt.value });

  return {
    service,
  };
});
