// src/repositories/ApiAuthRepository.ts

import { User, UserCredentials } from '../entities/User';
import { ApiAuthAdapter } from '../adapters/ApiAuthAdapter';
import { useAuthStore } from '../context/authStore';
import api from '../../../api/axios';
import { AuthRepository } from '../repositories/AuthRepository';

export class ApiAuthRepository implements AuthRepository {
  async login(credentials: UserCredentials): Promise<User> {
    try {
      const response = await api.post('/api/v1/auth/sign-in', credentials);
      const user = ApiAuthAdapter.toEntity(response.data);

      // Guardamos en Zustand
      useAuthStore.getState().setAuthData(user.token, user.email, user.roles);

      // También en localStorage
      localStorage.setItem('auth_token_softContable', user.token);

      return user;
    } catch (error: any) {
      const message = error.response?.data?.message || 'Error al autenticar';
      throw new Error(message);
    }
  }

  // Metodo para desloguear
  async logout(): Promise<void> {
    useAuthStore.getState().logout();
    localStorage.removeItem('auth_token_softContable');
  }

  // Metodo para obtener datos del usuario actual
  async getProfile(): Promise<any> {
    const token = useAuthStore.getState().token;

    if (!token) throw new Error('Token no disponible');

    try {
      const response = await api.get('/api/v1/auth/profile', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data.data;
    } catch (error: any) {
      const message =
        error.response?.data?.message || 'Error al obtener perfil';
      throw new Error(message);
    }
  }
}
