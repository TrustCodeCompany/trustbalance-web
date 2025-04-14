// src/pages/LoginPage.tsx
import { LoginForm } from '../components/LoginForm';

export const LoginPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="flex w-full max-w-6xl bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Imagen ilustrativa: solo visible en dispositivos medianos hacia arriba */}
        <div className="hidden md:flex md:w-3/5 bg-blue-50 items-center justify-center p-8">
          <img
            src="/login-image.png"
            alt="Login Illustration"
            className="max-w-full h-auto"
          />
        </div>

        {/* Formulario */}
        <div className="w-full md:w-2/5 p-10">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};
