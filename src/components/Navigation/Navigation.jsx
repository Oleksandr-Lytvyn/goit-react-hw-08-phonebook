import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';

import css from './Navigation.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <nav className={css.nav_list}>
      <NavLink className={css.nav_item} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={css.nav_item} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
