interface SidebarProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  isSidebarOpen,
  toggleSidebar,
}) => {
  return (
    <div
      className={`fixed lg:static bg-red-700 text-red-100 w-2/3 lg:w-[250px] h-full flex flex-col justify-between transform ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 lg:translate-x-0`}
    >
      {/* Logo */}
      <div className="p-4 text-center bg-gray-100 h-[70px]">
        <h1 className="text-xl font-bold text-red-950">Empresa Logo</h1>
      </div>

      {/* Menu Items */}
      <nav className="grow p-4 text-center">
        <ul className="space-y-4">
          <li className="hover:bg-red-900 p-2 rounded-sm">Dashboard</li>
          <li className="hover:bg-red-900 p-2 rounded-sm">Reports</li>
          <li className="hover:bg-red-900 p-2 rounded-sm">Settings</li>
        </ul>
      </nav>

      {/* Bottom Image */}
      <div className="p-4">
        <img
          src="https://picsum.photos/400"
          alt="Imagen Empresa"
          className="rounded-sm w-full h-24 object-cover"
        />
      </div>
    </div>
  );
};
