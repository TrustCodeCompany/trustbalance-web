import { useState } from 'react';
import { Outlet } from 'react-router';
import Sidebar from '../components/Sidebar';
import TopMenu from '../components/TopMenu';
import { useAuthStore } from '../../auth/context/authStore';

const DashboardLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { token, email, roles } = useAuthStore();
  console.log('token', token);
  console.log('email', email);
  console.log('roles', roles);

  return (
    <div className="flex h-screen ">
      <Sidebar collapsed={collapsed} />
      <div className="flex flex-col flex-1">
        <TopMenu
          collapsed={collapsed}
          onToggle={() => setCollapsed(!collapsed)}
        />
        <main className="flex-1 p-6 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
