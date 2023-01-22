import { LoginForm } from 'components/LoginForm/LoginForm';
import { Modal } from 'components/Modal/Modal';
import { RegistrationForm } from 'components/RegistrationForm/RegistrationForm';
import { useState } from 'react';

export function AuthNav() {
  const [isModal, setIsModal] = useState(false);
  const [isReg, setIsReg] = useState(false);
  const [isLog, setIsLog] = useState(false);

  const onClick = event => {
    if (event.target.id === '1') {
      setIsModal(true);
      setIsLog(true);
      setIsReg(false);
    } else if (event.target.id === '2') {
      setIsModal(true);
      setIsLog(false);
      setIsReg(true);
    }
  };

  return (
    <>
      <div>
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
        <Modal onClick={setIsModal}>
          {isReg && <RegistrationForm isModal={setIsModal} />}
          {isLog && <LoginForm isModal={setIsModal} />}
        </Modal>
      )}
    </>
  );
}
