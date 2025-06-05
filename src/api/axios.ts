// src/api/axios.ts
import axios from 'axios';
import { useAuthStore } from '../modules/auth/context/authStore';

const api = axios.create({
  baseURL: 'https://tb-api-v2.onrender.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor para agregar token automáticamente
api.interceptors.request.use((config) => {
  const token =
    useAuthStore.getState().token ||
    localStorage.getItem('auth_token_softContable');
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
