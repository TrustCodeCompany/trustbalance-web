import { useState, useRef, useEffect } from 'react';
import { FaUserCircle } from 'react-icons/fa';

const AvatarMenu = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <FaUserCircle
        className="text-3xl text-gray-700 cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg z-10">
          <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
            Profile
          </button>
          <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
            Settings
          </button>
          <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default AvatarMenu;
