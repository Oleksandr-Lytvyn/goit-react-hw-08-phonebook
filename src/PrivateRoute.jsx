import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({
  component: Component,
  redirectTo = '/login',
}) => {
  const isLoggedIn = useSelector(state => state.auth.token);
  const isRefreshing = useSelector(state => state.auth.isRefreshing);
  const shouldRedirect = !isLoggedIn && !isRefreshing;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
