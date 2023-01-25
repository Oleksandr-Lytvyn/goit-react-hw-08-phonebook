import { useNavigate } from 'react-router-dom';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { Modal } from 'components/Modal/Modal';
import { RegistrationForm } from 'components/RegistrationForm/RegistrationForm';
import { useState } from 'react';
import css from './AuthNav.module.css';

export const AuthNav = () => {
  const [isModal, setIsModal] = useState(false);
  const [isReg, setIsReg] = useState(false);
  const [isLog, setIsLog] = useState(false);
  const navigate = useNavigate();

  const onClick = event => {
    if (event.target.id === '1') {
      // setIsModal(true);
      setIsLog(true);
      setIsReg(false);
      navigate('/login');
    } else if (event.target.id === '2') {
      // setIsModal(true);
      setIsLog(false);
      setIsReg(true);
      navigate('/registration');
    }
  };

  return (
    <>
      <div className={css.buttons}>
        <button
          id="1"
          type="button"
          onClick={e => {
            onClick(e);
          }}
        >
          log in
        </button>
        <button
          id="2"
          type="button"
          onClick={e => {
            onClick(e);
          }}
        >
          registration
        </button>
      </div>
      {isModal && (
        <Modal>
          {isReg && <RegistrationForm isModal={setIsModal} />}
          {isLog && <LoginForm isModal={setIsModal} />}
        </Modal>
      )}
    </>
  );
};
