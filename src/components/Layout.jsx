import { Outlet } from 'react-router-dom';

export const Layout = ({ children }) => {
  return (
    <>
      <div
        style={{
          maxWidth: 960,
          margin: '0 auto',
          padding: '0 16px',
          backgroundColor: '#dae3e7',
          height: '100vh',
        }}
      >
        {children}
        <Outlet />
      </div>
    </>
  );
};
