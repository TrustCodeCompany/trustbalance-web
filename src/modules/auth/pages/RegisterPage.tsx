// src/pages/RegisterPage.tsx
import { RegisterForm } from '../components/RegisterForm';

export const RegisterPage: React.FC = () => {
  return (
    <div className="min-h-screen w-dvw flex items-center justify-center bg-gray-100">
      <div className="flex w-full max-w-6xl bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Imagen ilustrativa */}
        <div className="hidden md:flex md:w-3/5 bg-blue-50 justify-center">
          <img
            src="/register-image.jpg"
            alt="Registro Illustration"
            className="max-w-full h-auto object-cover"
          />
        </div>

        {/* Formulario */}
        <div className="w-full md:w-2/5 p-10">
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};
