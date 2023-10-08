import type { AuthDTO, LoginCredentials } from 'auth/core';
import { userMock } from 'auth/mock';
import { sleep } from 'shared/utils/sleep';

/**
 * El repositorio sirve para poder enviar los datos a un agente externo como un servicio
 * backend, también se encarga de transformar los datos devueltos (de ser necesario).
 */
export const AuthRepository = {
  login: async (credentials: LoginCredentials): Promise<AuthDTO> => {
    // aquí irá la futura función para llamar al servicio FIREBASE/BACKEND/SUPABASE/ETC
    await sleep();

    return {
      user: userMock,
      jwt: credentials.password,
    };
  },
};
