import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';

import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const handleLogOut = () => dispatch(logOut());

  return (
    <div className={css.user_menu}>
      <p className={css.user_email}>{user.email}</p>
      <button
        className={css.user_button}
        onClick={handleLogOut}
        size="small"
        variant="outlined"
        color="secondary"
      >
        Logout
      </button>
    </div>
  );
};
