import { useState } from 'react';
import { Outlet } from 'react-router';
import Sidebar from '../components/Sidebar';
import TopMenu from '../components/TopMenu';

const DashboardLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

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
