import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from 'redux/Auth/auth-operations';
import { Layout } from './Layout';
import { Route, Routes } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import { Contacts } from 'pages/Contacts';
import { LoginForm } from './LoginForm/LoginForm';
import { RegistrationForm } from './RegistrationForm/RegistrationForm';
// import { PrivateRoute } from 'PrivateRoute';

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(state => state.auth.isRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return (
    !isRefreshing && (
      <>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />}></Route>
            <Route path="login" element={<LoginForm />}></Route>
            <Route path="registration" element={<RegistrationForm />}></Route>
            <Route path="/contacts" element={<Contacts />}></Route>
            {/* <Route
              path="/contacts"
              element={
                <PrivateRoute redirectTo="/login" component={<Contacts />} />
              }
            /> */}
          </Route>
        </Routes>
      </>
    )
  );
};
