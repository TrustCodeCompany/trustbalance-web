import { createBrowserRouter, Navigate } from 'react-router';
import { DashboardPage } from '../modules/dashboard/pages';
import { LoginPage } from '../modules/auth/pages/LoginPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/login" replace />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/dashboard',
    element: <DashboardPage />,
  },
]);
