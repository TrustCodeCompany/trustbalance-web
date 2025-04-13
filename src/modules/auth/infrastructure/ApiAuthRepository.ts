import { AuthRepository } from '../repositories/AuthRepository';
import { User, UserCredentials } from '../entities/User';
import { ApiAuthAdapter } from '../adapters/ApiAuthAdapter';
import { useAuthStore } from '../context/authStore'; // Importa tu store Zustand

export class ApiAuthRepository implements AuthRepository {
  private apiUrl = 'https://tb-api-v1.onrender.com/auth';

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

    // Guardamos el token y otros datos de la respuesta en el contexto Zustand
    const { token } = data.results; // Suponiendo que el token está en la respuesta
    // const { email, roles } = ApiAuthAdapter.toEntity(data); // Adaptamos los datos a nuestra entidad

    // Actualizamos el contexto Zustand con el token y demás datos
    useAuthStore.getState().setToken(token);

    return ApiAuthAdapter.toEntity(data);
  }

  async logout(): Promise<void> {
    // Limpiar los datos en el contexto Zustand al hacer logout
    useAuthStore.getState().logout();
  }
}
