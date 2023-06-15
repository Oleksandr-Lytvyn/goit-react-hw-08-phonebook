import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivatePoute';
import VerifyEmail from 'pages/VerifyEmail';
import WelcomePage from 'pages/WelcomePage';
import RegisterPage from 'pages/RegisterPage';
import LoginPage from 'pages/LoginPage';
import ContactPage from 'pages/ContactPage';

// const HomePage = lazy(() => import('../pages/Home'));
// const RegisterPage = lazy(() => import('../pages/Register'));
// const LoginPage = lazy(() => import('../pages/Login'));
// const ContactsPage = lazy(() => import('../pages/ContactsPage'));

function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <Routes>
        <Route
          path="/welcome"
          element={<RestrictedRoute component={<WelcomePage />} />}
        />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              component={<RegisterPage />}
              redirectTo="/verify"
            />
          }
        />
        <Route
          path="/login"
          element={<RestrictedRoute component={<LoginPage />} />}
        />

        <Route
          path="/"
          element={<PrivateRoute component={<Layout />} />}
          className="container"
        >
          <Route index element={<ContactPage />} />

          <Route
            path="/new"
            element={
              <PrivateRoute component={<ContactPage />} redirectTo="/login" />
            }
          />
        </Route>
        <Route path="/verify" element={<VerifyEmail />} />
      </Routes>
    )
  );
}

export default App;
