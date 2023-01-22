import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppBar } from './AppBar/AppBar';
import { refreshUser } from 'redux/Auth/auth-operations';

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(state => state.auth.isRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return (
    !isRefreshing && (
      <section>
        <AppBar />
      </section>
    )
  );
};
