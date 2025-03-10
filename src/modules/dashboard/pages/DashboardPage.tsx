import { useState } from 'react';
import { Footer, Sidebar, TopMenu } from '../components';

export const DashboardPage: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex flex-col h-screen w-screen">
      <div className="flex flex-1">
        <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div className="flex-1 bg-gray-100">
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
