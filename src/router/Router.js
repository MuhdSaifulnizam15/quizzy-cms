import { Suspense, lazy } from 'react';
import { Navigate, useRoutes, useLocation } from 'react-router-dom';

// layouts
import DashboardLayout from 'layouts/dashboard';
import LogoOnlyLayout from 'layouts/LogoOnlyLayout';
// components
import LoadingScreen from 'components/LoadingScreen';
// guards
import GuestGuard from 'guards/GuestGuard';
import AuthGuard from 'guards/AuthGuard';

// ----------------------------------------------------------------------

const Loadable = (Component) => (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pathname } = useLocation();
  const isDashboard = pathname.includes('/dashboard');

  return (
    <Suspense
      fallback={
        <LoadingScreen
          sx={{
            ...(!isDashboard && {
              top: 0,
              left: 0,
              width: 1,
              zIndex: 9999,
              position: 'fixed'
            })
          }}
        />
      }
    >
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: 'auth',
      children: [
        {
          path: 'login',
          element: (
            <GuestGuard>
              <Login />
            </GuestGuard>
          )
        },
        {
          path: 'register',
          element: (
            <GuestGuard>
              <Register />
            </GuestGuard>
          )
        },
        { path: 'reset-password', element: <ResetPassword /> },
        { path: 'forgot-password', element: <ForgotPassword /> },
        { path: 'verify', element: <VerifyCode /> }
      ]
    },

    // Dashboard Routes
    {
      path: 'dashboard',
      element: (
        <AuthGuard>
          <DashboardLayout />
        </AuthGuard>
      ),
      children: [
        { element: <Navigate to="/dashboard/app" replace /> },
        { path: 'app', element: <DashboardApp /> },
        { path: 'user', element: <UserList /> },
        { path: 'products', element: <Products /> },
        { path: 'blog', element: <Blog /> }
      ]
    },

    // Main Routes
    {
      path: '*',
      element: <LogoOnlyLayout />,
      children: [
        { path: 'coming-soon', element: <ComingSoon /> },
        { path: 'maintenance', element: <Maintenance /> },
        { path: '500', element: <Page500 /> },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" replace /> }
      ]
    },
    // {
    //   path: '/',
    //   element: <MainLayout />,
    //   children: [
    //     { element: <LandingPage /> },
    //     { path: 'about-us', element: <About /> },
    //     { path: 'contact-us', element: <Contact /> },
    //     { path: 'faqs', element: <Faqs /> },
    //   ]
    // },
    { path: '*', element: <Navigate to="/404" replace /> }
  ])
}

// IMPORT PAGES

// Authentication
const Login = Loadable(lazy(() => import('pages/Auth/Login')));
const Register = Loadable(lazy(() => import('pages/Auth/Register')));
const ResetPassword = Loadable(lazy(() => import('pages/Auth/ResetPassword')));
const ForgotPassword = Loadable(lazy(() => import('pages/Auth/ForgotPassword')));
const VerifyCode = Loadable(lazy(() => import('pages/Auth/VerifyCode')));

// Dashboard
const DashboardApp = Loadable(lazy(() => import('pages/DashboardApp')));
const Products = Loadable(lazy(() => import('pages/Products')));
const Blog = Loadable(lazy(() => import('pages/Blog')));
const User = Loadable(lazy(() => import('pages/User')));

const UserList = Loadable(lazy(() => import('pages/Dashboard/User/UserList')));

// Main
const ComingSoon = Loadable(lazy(() => import('pages/ComingSoon')));
const NotFound = Loadable(lazy(() => import('pages/Page404')));
const Maintenance = Loadable(lazy(() => import('pages/Maintenance')));
const Page500 = Loadable(lazy(() => import('pages/Page500')));