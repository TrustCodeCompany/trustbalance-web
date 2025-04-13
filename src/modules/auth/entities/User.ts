export interface User {
  id: string;
  email: string;
  token: string;
  roles: string[];
}

export interface UserCredentials {
  email: string;
  password: string;
  token?: string;
  roles?: string[];
}
