import React, { Suspense } from 'react';
import { LoginForm } from '../components/LoginForm';

// Componente principal que envuelve el formulario con Suspense
export const LoginPage: React.FC = () => {
  return (
    <Suspense fallback={<div className="text-center">Cargando...</div>}>
      <LoginForm />
    </Suspense>
  );
};
