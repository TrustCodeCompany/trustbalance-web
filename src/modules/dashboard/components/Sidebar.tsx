import { NavLink } from 'react-router';
import {
  IoHomeOutline,
  IoBarChartOutline,
  IoSettingsOutline,
} from 'react-icons/io5';
import logo from '/src/assets/img/logo.png';

interface SidebarProps {
  collapsed: boolean;
}

const menuItems = [
  { name: 'Home', icon: IoHomeOutline, path: '/dashboard/home' },
  { name: 'Reports', icon: IoBarChartOutline, path: '/dashboard/reports' },
  { name: 'Settings', icon: IoSettingsOutline, path: '/dashboard/settings' },
];

const Sidebar = ({ collapsed }: SidebarProps) => (
  <aside
    className={`bg-white border-r flex flex-col transition-all duration-300 ease-in-out ${
      collapsed ? 'w-20' : 'w-44'
    }`}
  >
    <div className="h-16 flex items-center justify-center">
      {collapsed ? (
        <img className="size-10 font-bold" src={logo} />
      ) : (
        <div className=" font-bold flex  gap-2">
          <img className="size-6 font-bold " src={logo} />
          <span className="">Trust Balance</span>
        </div>
      )}
    </div>
    <nav className="flex-1 mt-4">
      {menuItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }: { isActive: boolean }) =>
            `flex items-center p-2 my-1 rounded transition-colors hover:bg-gray-200 ${
              isActive ? 'text-indigo-600 bg-gray-100' : 'text-gray-700'
            }`
          }
        >
          <item.icon className="text-2xl" />
          {!collapsed && <span className="ml-3 text-sm">{item.name}</span>}
        </NavLink>
      ))}
    </nav>
  </aside>
);

export default Sidebar;
