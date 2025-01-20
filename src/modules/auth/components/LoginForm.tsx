import { useNavigate } from 'react-router';
import { LoginFormData, loginSchema } from '../schemas/loginSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { ApiAuthRepository } from '../infrastructure/ApiAuthRepository';
import { LoginUseCase } from '../usecases/LoginUseCase';

// Inicializar las dependencias
const authRepository = new ApiAuthRepository();
const loginUseCase = new LoginUseCase(authRepository);

// Componente que maneja el formulario y la respuesta
export const LoginForm: React.FC = () => {
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    mode: 'onChange',
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      setError(null);
      await loginUseCase.execute({
        email: data.email,
        password: data.password,
      });
      navigate('/dashboard');
    } catch (err) {
      setError(
        err instanceof Error ? err.message : 'Error en la autenticación',
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 w-full max-w-md mx-auto p-8 bg-white rounded-lg shadow-md"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-gray-700">
          Correo:
        </label>
        <input
          type="email"
          id="email"
          {...register('email')}
          className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.email && (
          <span role="alert" className="text-red-500 text-sm">
            {errors.email.message}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="password" className="text-gray-700">
          Contraseña:
        </label>
        <input
          type="password"
          id="password"
          {...register('password')}
          className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.password && (
          <span role="alert" className="text-red-500 text-sm">
            {errors.password.message}
          </span>
        )}
      </div>

      {error && (
        <div role="alert" className="text-red-500 text-sm">
          {error}
        </div>
      )}

      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
      >
        Iniciar Sesión
      </button>
    </form>
  );
};
