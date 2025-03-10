import { User, UserCredentials } from '../entities/User';
import { AuthRepository } from '../repositories/AuthRepository';

export class LoginUseCase {
  constructor(private authRepository: AuthRepository) {}

  async execute(credentials: UserCredentials): Promise<User> {
    const user = await this.authRepository.login(credentials);
    // Aquí podrías agregar lógica adicional, como guardar el token en localStorage
    localStorage.setItem('auth_token_softContable', user.token);
    return user;
  }
}
