import { User, UserCredentials } from '../entities/User';

export interface AuthRepository {
  login(credentials: UserCredentials): Promise<User>;
  logout(): Promise<void>;
}
