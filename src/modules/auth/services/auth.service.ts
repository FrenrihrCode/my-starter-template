import type { LoginCredentials, UserDTO } from 'auth/core';
import { AuthRepository } from 'auth/repository/auth.repository';
import { createErrorHandler } from 'shared/utils';

export const AuthError = createErrorHandler('AuthError');

/**
 * Servicio para manejar el módulo de Auth, si la función es muy grande o necesita
 * de una mejor abstracción usar los "cases"
 */
export class AuthService {
  internalIsLogged: boolean;

  constructor({ token }: { token?: string }) {
    this.internalIsLogged = Boolean(token) && token !== 'undefined';
  }

  get isLogged() {
    return this.internalIsLogged;
  }

  async login({ password, username }: LoginCredentials): Promise<UserDTO> {
    try {
      if (username === 'test' && password === '12345678') {
        const { user, jwt } = await AuthRepository.login({ password, username });
        window.localStorage.setItem('jwt', jwt);
        return user;
      }
      throw new AuthError('auth.error');
    } catch (error) {
      throw new AuthError('auth.error');
    }
  }

  async logout(): Promise<void> {
    try {
      window.localStorage.removeItem('jwt');
      this.internalIsLogged = false;
    } catch (error) {
      throw new AuthError('auth.notLogout');
    }
  }
}
