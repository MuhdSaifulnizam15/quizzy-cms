
import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

// layouts
import DashboardLayout from '../layouts/dashboard';
import LogoOnlyLayout from '../layouts/LogoOnlyLayout';

// pages
// authentication
import Login from '../pages/Auth/Login';
import Register from '../pages/Auth/Register';
import ForgotPassword from '../pages/Auth/ForgotPassword';
import NotFound from '../pages/Auth/Page404';
import ComingSoon from '../pages/Auth/ComingSoon';
import Maintenance from '../pages/Auth/Maintenance';

import DashboardApp from '../pages/DashboardApp';
import Products from '../pages/Products';
import Blog from '../pages/Blog';
import User from '../pages/User';

export default function Router() {
    return useRoutes([
      {
        path: '/dashboard',
        element: <DashboardLayout />,
        children: [
          { element: <Navigate to="/dashboard/app" replace /> },
          { path: 'app', element: <DashboardApp /> },
          { path: 'user', element: <User /> },
          { path: 'products', element: <Products /> },
          { path: 'blog', element: <Blog /> }
        ]
      },
      {
        path: '/',
        element: <LogoOnlyLayout />,
        children: [
          { path: 'login', element: <Login /> },
          { path: 'register', element: <Register /> },
          { path: '404', element: <NotFound /> },
          { path: 'forgot-password', element: <ForgotPassword /> },
          { path: 'coming-soon', element: <ComingSoon /> },
          { path: 'maintenance', element: <Maintenance /> },
          { path: '/', element: <Navigate to="/dashboard" /> },
          { path: '*', element: <Navigate to="/404" /> }
        ]
      },
      { path: '*', element: <Navigate to="/404" replace /> }
    ]);
  }