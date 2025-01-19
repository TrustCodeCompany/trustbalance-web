import { AvatarMenu } from './AvatarMenu';

interface TopMenuProps {
  toggleSidebar: () => void;
}

export const TopMenu: React.FC<TopMenuProps> = ({ toggleSidebar }) => {
  return (
    <div className="flex items-center justify-between bg-white p-4 shadow-lg h-[70px]">
      <ul className="flex space-x-4">
        <li>Primer link</li>
        <li>Segundo link</li>
      </ul>

      {/* User Avatar */}
      <AvatarMenu />

      {/* Hamburger Button */}
      <button className="lg:hidden p-2 text-gray-600" onClick={toggleSidebar}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
    </div>
  );
};
