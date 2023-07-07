import { Outlet } from 'react-router-dom';
import { AppBar } from 'components/AppBar/AppBar';
import { Suspense } from 'react';
// import { useAuth } from 'hooks';
import MyLoader from 'components/Loader/Loader';
import { useSelector } from 'react-redux';

export const Layout = () => {
  // const { isRefreshing } = useAuth();
  const isLoading = useSelector(state => state.auth.isLoading);
  return (
    <>
      {isLoading && <MyLoader />}
      <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>
        <AppBar />
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};
