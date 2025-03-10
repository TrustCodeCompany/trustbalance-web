import { AuthRepository } from '../repositories/AuthRepository';
import { User, UserCredentials } from '../entities/User';
import { ApiAuthAdapter } from '../adapters/ApiAuthAdapter';

export class ApiAuthRepository implements AuthRepository {
  private apiUrl = 'https://tb-api-jl9j.onrender.com/auth';

  async login(credentials: UserCredentials): Promise<User> {
    const response = await fetch(`${this.apiUrl}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      throw new Error('Error en la autenticación');
    }

    const data = await response.json();
    console.log(data);
    return ApiAuthAdapter.toEntity(data);
  }

  async logout(): Promise<void> {
    // Implementar logout si es necesario
    localStorage.removeItem('auth_token');
  }
}
