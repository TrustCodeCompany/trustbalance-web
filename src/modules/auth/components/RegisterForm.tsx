import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { useState } from 'react';

type FormData = {
  name: string;
  lastName: string;
  ruc: string;
  email: string;
};

export const RegisterForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    console.log('data', data);

    try {
      const response = await fetch(
        'https://tb-api-v2.onrender.com/api/v1/auth/sign-up',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...data,
          }),
        },
      );

      if (!response.ok) {
        console.log('error', response);
        throw new Error('Error al registrar usuario');
      }

      navigate('/register-success');
    } catch (error) {
      console.error('Error:', error);
      alert('Hubo un problema al registrarse. Intenta nuevamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <h2 className="text-2xl font-semibold text-gray-800">
        Crear Cuenta en Trust Balance
      </h2>
      <p className="text-sm text-gray-500 mb-4">Tu Panel de Administrador</p>

      {/* Nombre */}
      <div className="flex flex-col gap-1 max-w-md">
        <label className="text-sm text-gray-700">Nombre</label>
        <input
          {...register('name', { required: 'El nombre es requerido' })}
          className="border rounded-md px-3 py-2 text-sm"
          placeholder="Tu nombre"
        />
        {errors.name && (
          <p className="text-sm text-red-600">{errors.name.message}</p>
        )}
      </div>

      {/* Apellido */}
      <div className="flex flex-col gap-1 max-w-md">
        <label className="text-sm text-gray-700">Apellido</label>
        <input
          {...register('lastName', { required: 'El apellido es requerido' })}
          className="border rounded-md px-3 py-2 text-sm"
          placeholder="Tu apellido"
        />
        {errors.lastName && (
          <p className="text-sm text-red-600">{errors.lastName.message}</p>
        )}
      </div>

      {/* RUC */}
      <div className="flex flex-col gap-1 max-w-md">
        <label className="text-sm text-gray-700">RUC</label>
        <input
          {...register('ruc', { required: 'El RUC es requerido' })}
          className="border rounded-md px-3 py-2 text-sm"
          placeholder="Tu RUC"
        />
        {errors.ruc && (
          <p className="text-sm text-red-600">{errors.ruc.message}</p>
        )}
      </div>

      {/* Email */}
      <div className="flex flex-col gap-1 max-w-md">
        <label className="text-sm text-gray-700">Correo</label>
        <input
          {...register('email', { required: 'El correo es requerido' })}
          className="border rounded-md px-3 py-2 text-sm"
          placeholder="correo@ejemplo.com"
        />
        {errors.email && (
          <p className="text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      {/* Botón */}
      <button
        type="submit"
        className="bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600 transition max-w-md disabled:opacity-70"
        disabled={loading}
      >
        {loading ? 'Cargando...' : 'Registrarse'}
      </button>

      <p className="text-sm text-center text-gray-600 mt-4">
        ¿Ya tienes una cuenta?{' '}
        <a href="/login" className="text-blue-500 hover:underline">
          Inicia sesión
        </a>
      </p>
    </form>
  );
};
