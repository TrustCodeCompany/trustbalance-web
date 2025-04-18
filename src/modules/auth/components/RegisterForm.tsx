// src/components/RegisterForm.tsx
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';

type FormData = {
  name: string;
  email: string;
  password: string;
};

export const RegisterForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const loading = false;
  const errorMessage = '';

  const onSubmit = (data: FormData) => {
    console.log('Datos del registro:', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <h2 className="text-2xl font-semibold text-gray-800">
        Crear Cuenta en Trust Balance
      </h2>
      <p className="text-sm text-gray-500 mb-4">Tu Panel de Administrador</p>

      {/* Botones sociales */}
      {/* <div className="flex gap-4">
        <button
          type="button"
          className="flex-1 border rounded-md py-2 flex items-center justify-center gap-2 hover:bg-gray-100 transition"
        >
          <FcGoogle className="text-base" />
          Crea con Google
        </button>
        <button
          type="button"
          className="flex-1 border rounded-md py-2 flex items-center justify-center gap-2 hover:bg-gray-100 transition"
        >
          <FaFacebook className="text-blue-600" />
          Registrate con FB
        </button>
      </div> */}
      {/* Separador */}
      {/* <div className="flex items-center justify-center gap-2">
        <hr className="flex-grow border-t" />
        <span className="text-sm text-gray-400">o regístrate con</span>
        <hr className="flex-grow border-t" />
      </div> */}
      {/* Name */}
      <div className="flex flex-col gap-1 max-w-md">
        <label className="text-sm text-gray-700">Nombre</label>
        <input
          type="text"
          {...register('name', { required: 'El nombre es requerido' })}
          className="border rounded-md px-3 py-2 text-sm"
          placeholder="Tu nombre completo"
        />
        {errors.name && (
          <p className="text-sm text-red-600">{errors.name.message}</p>
        )}
      </div>
      {/* Email */}
      <div className="flex flex-col gap-1 max-w-md">
        <label className="text-sm text-gray-700">Correo</label>
        <input
          type="email"
          {...register('email', { required: 'El correo es requerido' })}
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
          {...register('password', { required: 'La contraseña es requerida' })}
          className="border rounded-md px-3 py-2 text-sm"
          placeholder="Crea una contraseña segura"
        />
        {errors.password && (
          <p className="text-sm text-red-600">{errors.password.message}</p>
        )}
      </div>
      {/* Submit */}
      <button
        type="submit"
        className="bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600 transition max-w-md"
        disabled={loading}
      >
        {loading ? 'Cargando...' : 'Registrarse'}
      </button>
      {/* Error general */}
      {errorMessage && (
        <p className="text-red-600 text-sm text-center">{errorMessage}</p>
      )}
      {/* Link a login */}
      <p className="text-sm text-center text-gray-600 mt-4">
        Ya tienes cuenta?{' '}
        <a href="/login" className="text-blue-500 hover:underline">
          Inicia sesión
        </a>
      </p>
    </form>
  );
};
