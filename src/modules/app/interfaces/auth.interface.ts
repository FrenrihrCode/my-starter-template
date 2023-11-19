export interface LoginPayload {
  username: string;
  password: string;
}

export interface SignupPayload extends LoginPayload {
  email: string;
}

export interface AuthResponse {
  user: string;
  jwt: string;
}
