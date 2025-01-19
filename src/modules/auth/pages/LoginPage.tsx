import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema, LoginFormData } from '../schemas/loginSchema';

const LoginForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
    trigger,
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    mode: 'onChange',
  });

  const onSubmit = async (data: LoginFormData) => {
    console.log('Login data:', data);
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

export default LoginForm;
