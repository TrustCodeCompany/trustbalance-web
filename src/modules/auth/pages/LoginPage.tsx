import React, { Suspense } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema, LoginFormData } from '../schemas/loginSchema';
import { useNavigate } from 'react-router';

// Función para manejar la autenticación de forma asíncrona
const loginUser = async (data: LoginFormData) => {
  const response = await fetch('https://tb-api-jl9j.onrender.com/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Error en la autenticación');
  }

  return response.json();
};

// Error Boundary Component
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error: Error | null }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="text-red-500 p-4">
          <h2>Algo salió mal</h2>
          <p>{this.state.error?.message}</p>
        </div>
      );
    }

    return this.props.children;
  }
}

// Componente que maneja el formulario y la respuesta
const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    mode: 'onChange',
  });

  const onSubmit = async (data: LoginFormData) => {
    const loginPromise = loginUser(data).catch((error) => {
      console.error('Error durante el login:', error);
      throw error;
    });

    const result = await loginPromise;
    console.log('Respuesta del servidor:', result);
    navigate('/dashboard');
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await trigger();
    handleSubmit(onSubmit)(e);
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="max-w-md mx-auto bg-white p-6 rounded shadow-md space-y-4"
      noValidate
    >
      <h2 className="text-xl font-bold text-center">Iniciar sesión</h2>
      <div>
        <label htmlFor="email" className="block font-medium">
          Correo:
        </label>
        <input
          id="email"
          type="email"
          {...register('email')}
          className="border w-full p-2 rounded"
          aria-describedby={errors.email ? 'email-error' : undefined}
        />
        {errors.email && (
          <p id="email-error" className="text-red-500 text-sm" role="alert">
            {errors.email.message}
          </p>
        )}
      </div>
      <div>
        <label htmlFor="password" className="block font-medium">
          Contraseña:
        </label>
        <input
          id="password"
          type="password"
          {...register('password')}
          className="border w-full p-2 rounded"
          aria-describedby={errors.password ? 'password-error' : undefined}
        />
        {errors.password && (
          <p id="password-error" className="text-red-500 text-sm" role="alert">
            {errors.password.message}
          </p>
        )}
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white w-full py-2 rounded hover:bg-blue-600"
      >
        Iniciar sesión
      </button>
    </form>
  );
};

// Componente principal que envuelve el formulario con Suspense y ErrorBoundary
export const LoginPage: React.FC = () => {
  return (
    <ErrorBoundary>
      <Suspense fallback={<div className="text-center">Cargando...</div>}>
        <LoginForm />
      </Suspense>
    </ErrorBoundary>
  );
};
