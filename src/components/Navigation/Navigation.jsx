import { AuthNav } from 'components/AuthNav/AuthNav';
import { HomeNav } from 'components/HomeNav/HomeNav';
import { useSelector } from 'react-redux';

export const Navigation = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  return isLoggedIn ? <HomeNav /> : <AuthNav />;
};
