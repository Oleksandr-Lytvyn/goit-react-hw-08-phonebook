import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <div className={css.nav_list}>
      <NavLink className={css.nav_item} to="/register">
        Register
      </NavLink>
      <NavLink className={css.nav_item} to="/login">
        Log In
      </NavLink>
    </div>
  );
};
