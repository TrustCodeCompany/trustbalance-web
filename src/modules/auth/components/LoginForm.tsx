import { LoginFormData, loginSchema } from '../schemas/loginSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { ApiAuthRepository } from '../infrastructure/ApiAuthRepository';
import { LoginUseCase } from '../usecases/LoginUseCase';
import { useNavigate } from 'react-router';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

// Inicializar las dependencias
const authRepository = new ApiAuthRepository();
const loginUseCase = new LoginUseCase(authRepository);

// Componente que maneja el formulario y la respuesta
export const LoginForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  // propiedades del paquete react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  // Función para manejar el envío del formulario
  const onSubmit = async (data: LoginFormData) => {
    setLoading(true);
    setErrorMessage('');
    try {
      await loginUseCase.execute({
        email: data.email,
        password: data.password,
      });
      navigate('/dashboard');
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      setErrorMessage(
        'Error al iniciar sesión. Por favor, verifica tus credenciales.',
      );
      toast.error(
        'Error al iniciar sesión. Por favor, verifica tus credenciales.',
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-4 w-full max-w-md mx-auto p-8 bg-white rounded-lg shadow-md">
      {/* cuerpo del formulario */}
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register('email')}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
          />
          {errors.email && <span>{errors.email.message}</span>}
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            {...register('password')}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
          />
          {errors.password && (
            <p className="mt-1 text-sm text-red-600">
              {errors.password.message}
            </p>
          )}
        </div>
        <button
          type="submit"
          disabled={loading}
          className="mt-4 bg-blue-500 text-white rounded-md p-2"
        >
          {loading ? 'Cargando...' : 'Iniciar Sesión'}
        </button>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
      </form>
    </div>
  );
};
