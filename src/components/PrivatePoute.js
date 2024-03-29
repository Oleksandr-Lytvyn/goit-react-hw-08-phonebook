import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks';

export const PrivateRoute = ({
  component: Component,
  redirectTo = '/welcome',
}) => {
  // const { isLoggedIn, isRefreshing } = useAuth();
  // const shouldRedirect = !isLoggedIn && !isRefreshing;
  // console.log(shouldRedirect);
  // return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
