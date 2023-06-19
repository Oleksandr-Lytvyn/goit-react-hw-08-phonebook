import ReactDOM from 'react-dom';
import { Backdrop, BackdropShadow, Window } from './Modal.styled';
import { ButtonCloseModal } from './Modal.styled';

import sprite from '../../images/sprite.svg';
import { useDispatch } from 'react-redux';

import { toggleModal } from 'redux/modal/modalSlice';

export const Modal = ({ children, setIsModal }) => {
  const dispatch = useDispatch();
  return ReactDOM.createPortal(
    <>
      <Backdrop>
        <Window>
          <ButtonCloseModal
            type="button"
            onClick={() => {
              setIsModal(false);
            }}
          >
            {' '}
            X
          </ButtonCloseModal>
          {children}
        </Window>
      </Backdrop>
      <BackdropShadow />
    </>,
    document.querySelector('#root-modal')
  );
};
