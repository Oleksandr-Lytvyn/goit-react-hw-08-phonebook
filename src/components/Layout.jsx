import { Outlet, Routes, Route } from 'react-router-dom';
import { AppBar } from './AppBar/AppBar';

export function Layout() {
  return (
    <>
      <AppBar />
      <Outlet />
    </>
  );
}
