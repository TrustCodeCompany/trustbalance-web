import { Link } from 'react-router';
export const RegisterSuccessPage = () => {
  return (
    <div className="min-h-screen w-dvw flex items-center justify-center bg-gray-100">
      <div className="flex w-full max-w-6xl bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Imagen ilustrativa */}
        <div className="hidden md:flex md:w-3/5 bg-blue-50 justify-center items-center">
          <img
            src="/register-image.jpg"
            alt="Registro Exitoso"
            className="max-w-full h-[450px] object-cover "
          />
        </div>

        {/* Mensaje de éxito */}
        <div className="w-full md:w-2/5 p-10 flex flex-col items-center justify-center text-center">
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            ¡Registro exitoso!
          </h2>
          <p className="text-gray-700 mb-2">
            Hemos enviado una contraseña temporal a tu correo electrónico.
          </p>
          <p className="text-gray-500 mb-4">
            Revisa tu bandeja de entrada o la carpeta de spam.
          </p>
          <Link
            to="/login"
            className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
          >
            Ir al login
          </Link>
        </div>
      </div>
    </div>
  );
};
