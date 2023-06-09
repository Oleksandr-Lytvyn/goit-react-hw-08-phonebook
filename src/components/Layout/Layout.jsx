import { Outlet } from 'react-router-dom';
import { AppBar } from 'components/AppBar/AppBar';
import { Suspense } from 'react';
import { Modal } from 'components/Modal/Modal';
import { useToggle } from 'hooks/useToggle';

export const Layout = () => {
  const { isOpen, close } = useToggle();
  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>
      <AppBar />

      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
