import { useState } from 'react';
import { IoMenuOutline, IoMoon, IoSunnyOutline } from 'react-icons/io5';
import AvatarMenu from './AvatarMenu';

interface TopMenuProps {
  collapsed: boolean;
  onToggle: () => void;
}

const TopMenu = ({ collapsed, onToggle }: TopMenuProps) => {
  const [darkMode, setDarkMode] = useState(false);

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
