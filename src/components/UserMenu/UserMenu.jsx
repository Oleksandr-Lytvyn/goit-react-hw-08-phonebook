import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';

import css from './UserMenu.module.css';
import { LogoutButton, UserMenuBox, UserProfile } from './UserMenu.styled';

import svgSprite from '../../images/sprite.svg';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const handleLogOut = () => dispatch(logOut());

  return (
    <UserMenuBox>
      <UserProfile>
        <p className={css.user_email}>{user.email}</p>
        <img
          src={user.avatarURL}
          style={{ width: '30px', height: '30px', borderRadius: '50%' }}
          alt="avatar"
        />
      </UserProfile>
      <LogoutButton
        onClick={handleLogOut}
        size="small"
        variant="outlined"
        color="secondary"
      >
        <svg style={{ width: '24px', height: '24px' }}>
          <use href={`${svgSprite}#icon-exit`}></use>
        </svg>
      </LogoutButton>
    </UserMenuBox>
  );
};
