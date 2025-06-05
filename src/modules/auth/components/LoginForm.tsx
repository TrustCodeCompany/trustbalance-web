// src/components/LoginForm.tsx
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginUseCase } from '../usecases/LoginUseCase';
import { loginSchema } from '../schemas/loginSchema';
import { ApiAuthRepository } from '../infrastructure/ApiAuthRepository';

const loginUseCase = new LoginUseCase(new ApiAuthRepository());

export const LoginForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: any) => {
    setLoading(true);

    try {
      await loginUseCase.execute(data);

      toast.success('Inicio de sesión exitoso 🎉', { position: 'top-center' });
      navigate('/dashboard');
    } catch (error: any) {
      toast.error(error.message || 'Error al iniciar sesión', {
        position: 'top-center',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 h-full justify-center"
    >
      <h2 className="text-2xl font-semibold text-gray-800">
        Bienvenido a Trust Balance
      </h2>
      <p className="text-sm text-gray-500 mb-4">Tu Panel de Administrador</p>

      {/* Email */}
      <div className="flex flex-col gap-1 max-w-md">
        <label className="text-sm text-gray-700">Correo:</label>
        <input
          type="email"
          {...register('email', { required: 'Email es requerido' })}
          className="border rounded-md px-3 py-2 text-sm"
          placeholder="Ingresa tu email..."
        />
        {errors.email?.message && (
          <p className="text-sm text-red-600">{String(errors.email.message)}</p>
        )}
      </div>

      {/* Password */}
      <div className="flex flex-col gap-1 max-w-md">
        <label className="text-sm text-gray-700">Contraseña</label>
        <input
          type="password"
          {...register('password', { required: 'Contraseña es requerida' })}
          className="border rounded-md px-3 py-2 text-sm"
          placeholder="Ingresa tu contraseña"
        />
        {errors.password && (
          <p className="text-sm text-red-600">
            {String(errors.password.message)}
          </p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600 transition max-w-md"
        disabled={loading}
      >
        {loading ? 'Cargando...' : 'Login'}
      </button>

      {/* Error */}
      {/* {errorMessage && (
        <p className="text-red-600 text-sm text-center">{errorMessage}</p>
      )} */}

      {/* Link a registro */}
      <p className="text-sm text-center text-gray-600 mt-4">
        Nuevo en TrustBalance?{' '}
        <a href="/register" className="text-blue-500 hover:underline">
          Crear un cuenta
        </a>
      </p>
    </form>
  );
};
