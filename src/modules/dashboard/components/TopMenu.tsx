import { useEffect, useState } from 'react';
import { IoMenuOutline, IoMoon, IoSunnyOutline } from 'react-icons/io5';
import AvatarMenu from './AvatarMenu';
import { useAuthStore } from '../../auth/context/authStore';
import { ApiAuthRepository } from '../../auth/infrastructure/ApiAuthRepository';

interface TopMenuProps {
  collapsed: boolean;
  onToggle: () => void;
}

const TopMenu = ({ collapsed, onToggle }: TopMenuProps) => {
  const [darkMode, setDarkMode] = useState(false);

  // Obtenemos el token, email y roles del store de autenticación
  const { token } = useAuthStore();
  console.log(token);

  // datos del usuario
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const repository = new ApiAuthRepository();
        const profile = await repository.getProfile();
        setUserName(`${profile.name} ${profile.lastName}`);
      } catch (error) {
        console.error('Error al obtener perfil:', error);
      }
    };

    if (token) {
      fetchProfile();
    }
  }, [token]);

  return (
    <header className="h-16 flex items-center justify-between bg-white px-4">
      <div className="flex items-center">
        <button
          onClick={onToggle}
          className="p-2 rounded hover:bg-gray-200 transition-colors"
        >
          <IoMenuOutline className="text-xl text-gray-700" />
        </button>
      </div>
      <div className="flex items-center">
        <span className="text-gray-700 font-semibold mr-4">
          Usuario:{' '}
          <span className="text-black-600">
            {userName ? userName : 'Cargando...'}
          </span>
        </span>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 mx-2 rounded hover:bg-gray-200 transition-colors"
        >
          {darkMode ? (
            <IoSunnyOutline className="text-xl" />
          ) : (
            <IoMoon className="text-xl" />
          )}
        </button>

        <AvatarMenu />
      </div>
    </header>
  );
};

export default TopMenu;
