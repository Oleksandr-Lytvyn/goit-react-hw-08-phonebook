import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivatePoute';
import VerifyEmail from 'pages/VerifyEmail';
import Welcome from 'pages/Welcome';
import Register from 'pages/Register';
import Login from 'pages/Login';

const HomePage = lazy(() => import('../pages/Home'));
// const RegisterPage = lazy(() => import('../pages/Register'));
// const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));

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
          element={<RestrictedRoute component={<Welcome />} />}
        />
        <Route
          path="/register"
          element={
            <RestrictedRoute component={<Register />} redirectTo="/verify" />
          }
        />
        <Route
          path="/login"
          element={<RestrictedRoute component={<Login />} />}
        />

        <Route
          path="/"
          element={<PrivateRoute component={<Layout />} />}
          className="container"
        >
          <Route index element={<ContactsPage />} />

          <Route
            path="/new"
            element={
              <PrivateRoute component={<ContactsPage />} redirectTo="/login" />
            }
          />
        </Route>
        <Route path="/verify" element={<VerifyEmail />} />
      </Routes>
    )
  );
}

export default App;
