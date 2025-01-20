import { AuthRepository } from '../../repositories/AuthRepository';
import { User, UserCredentials } from '../../entities/User';

export class MockAuthRepository implements AuthRepository {
  private mockUser: User = {
    id: '1',
    email: 'test@example.com',
    token: 'mock-token-123',
  };

  private shouldFail = false;

  setShouldFail(value: boolean) {
    this.shouldFail = value;
  }

  async login(credentials: UserCredentials): Promise<User> {
    if (this.shouldFail) {
      throw new Error('Error en la autenticación');
    }

    if (
      credentials.email === 'test@example.com' &&
      credentials.password === 'password123'
    ) {
      return this.mockUser;
    }

    throw new Error('Credenciales inválidas');
  }

  async logout(): Promise<void> {
    // Mock implementation
    return Promise.resolve();
  }
}
