// src/components/LoginForm.tsx
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';

type FormData = {
  email: string;
  password: string;
};

export const LoginForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const loading = false;
  const errorMessage = '';

  const onSubmit = (data: FormData) => {
    console.log('Datos del formulario:', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <h2 className="text-2xl font-semibold text-gray-800">
        Bienvenido a Trust Balance
      </h2>
      <p className="text-sm text-gray-500 mb-4">Tu Panel de Administrador</p>

      {/* Botones sociales */}
      <div className="flex gap-4">
        <button
          type="button"
          className="flex-1 border rounded-md py-2 flex items-center justify-center gap-2 hover:bg-gray-100 transition"
        >
          <FcGoogle className="text-xl" />
          Login con Google
        </button>
        <button
          type="button"
          className="flex-1 border rounded-md py-2 flex items-center justify-center gap-2 hover:bg-gray-100 transition"
        >
          <FaFacebook className="text-blue-600 text-xl" />
          Login con FB
        </button>
      </div>

      {/* Separador */}
      <div className="flex items-center justify-center gap-2">
        <hr className="flex-grow border-t" />
        <span className="text-sm text-gray-400">o logueate con</span>
        <hr className="flex-grow border-t" />
      </div>

      {/* Email */}
      <div className="flex flex-col gap-1 max-w-md">
        <label className="text-sm text-gray-700">Correo:</label>
        <input
          type="email"
          {...register('email', { required: 'Email is required' })}
          className="border rounded-md px-3 py-2 text-sm"
          placeholder="Ingresa tu email..."
        />
        {errors.email && (
          <p className="text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      {/* Password */}
      <div className="flex flex-col gap-1 max-w-md">
        <label className="text-sm text-gray-700">Contraseña</label>
        <input
          type="password"
          {...register('password', { required: 'Password is required' })}
          className="border rounded-md px-3 py-2 text-sm"
          placeholder="Ingresa tu contraseña"
        />
        {errors.password && (
          <p className="text-sm text-red-600">{errors.password.message}</p>
        )}
      </div>

      {/* Remember + Forgot */}
      <div className="flex items-center justify-between text-sm text-gray-600 max-w-md">
        <label className="flex items-center gap-2">
          <input type="checkbox" className="accent-blue-500" />
          Recordar este equipo
        </label>
        <a href="#" className="text-blue-500 hover:underline">
          Olvidaste tu contraseña?
        </a>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600 transition max-w-md"
        disabled={loading}
      >
        {loading ? 'Cargando...' : 'Login'}
      </button>

      {/* Error general */}
      {errorMessage && (
        <p className="text-red-600 text-sm text-center">{errorMessage}</p>
      )}

      {/* Link a registro */}
      <p className="text-sm text-center text-gray-600 mt-4">
        Nuevo en TrustBalance?{' '}
        <a href="#" className="text-blue-500 hover:underline">
          Crear un cuenta
        </a>
      </p>
    </form>
  );
};
