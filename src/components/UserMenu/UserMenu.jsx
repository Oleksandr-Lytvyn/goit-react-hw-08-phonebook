import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';

import css from './UserMenu.module.css';
import { LogoutButton, UserMenuBox, UserProfile } from './UserMenu.styled';

import svgSprite from '../../images/sprite.svg';
import { useState } from 'react';
import { Modal } from 'components/Modal/Modal';
import { Avatar } from 'components/Avatar/Avatar';

export const UserMenu = () => {
  const [isModal, setIsModal] = useState(false);

  const dispatch = useDispatch();
  const { user } = useAuth();
  const handleLogOut = () => dispatch(logOut());

  return (
    <>
      {isModal && (
        <Modal setIsModal={setIsModal}>
          <h2 style={{ textAlign: 'center', marginTop: '10px' }}>change ava</h2>
          <Avatar setIsModal={setIsModal} />
        </Modal>
      )}
      <UserMenuBox>
        <UserProfile>
          <p className={css.user_email}>{user.email}</p>
          <img
            src={`https://nodejs-homework-2-6.onrender.com/${user.avatarURL}`}
            style={{ width: '30px', height: '30px', borderRadius: '50%' }}
            alt="avatar"
            onClick={() => {
              setIsModal(true);
            }}
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
    </>
  );
};
