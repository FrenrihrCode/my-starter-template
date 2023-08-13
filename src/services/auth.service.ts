import type { AuthResponse, LoginPayload } from '~/interfaces';
import { createErrorHandler } from '~/utils';

export const AuthError = createErrorHandler('AuthError');

class AuthService {
  constructor() {}

  async login({ password, username }: LoginPayload): Promise<AuthResponse> {
    if (username === 'test' && password === '12345678') {
      return {
        jwt: '123',
        user: 'Juan',
      };
    }
    throw new AuthError('auth.error');
  }
}

export const authService = new AuthService();
