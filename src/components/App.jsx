import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppBar } from './AppBar/AppBar';
import { refreshUser } from 'redux/Auth/auth-operations';
import { Layout } from './Layout';

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(state => state.auth.isRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return (
    !isRefreshing && (
      <section>
        <Layout>
          <AppBar />
        </Layout>
      </section>
    )
  );
};
