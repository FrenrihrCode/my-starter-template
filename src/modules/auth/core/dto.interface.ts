export interface UserDTO {
  email: string;
  username: string;
  avatar: string;
  restaurant: string;
}

export interface AuthDTO {
  jwt: string;
  user: UserDTO;
}
