import { useState, useEffect } from 'react';
import { Footer, Sidebar, TopMenu } from '../components';
import { useAuthStore } from '../../auth/context/authStore';

export const DashboardPage: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const token = useAuthStore((state) => state.token);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  useEffect(() => {
    // Esto se ejecuta al cargar la página
    if (token) {
      console.log('Token del contexto Zustand:', token);

      // Ejemplo: puedes hacer aquí una petición con el token
      fetch('https://tb-api-v1.onrender.com/users/profile', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log('Perfil del usuario:', data);
        })
        .catch((error) => {
          console.error('Error al obtener el perfil:', error);
        });
    } else {
      console.warn('No hay token disponible en el contexto');
    }
  }, [token]);

  return (
    <div className="flex flex-col h-screen w-screen">
      <div className="flex flex-1">
        <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div className="flex-1">
          <TopMenu toggleSidebar={toggleSidebar} />
          <div className="p-4">
            <h1 className="text-2xl font-bold">Dashboard Content</h1>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
