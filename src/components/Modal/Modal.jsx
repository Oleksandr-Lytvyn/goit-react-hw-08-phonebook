import ReactDOM from 'react-dom';
import { Backdrop, BackdropShadow, Window } from './Modal.styled';
import {
  ButtonCloseModal,
  ButtonStyled,
} from 'components/Button/Button.styled';

import sprite from '../../images/sprite.svg';
import { useDispatch } from 'react-redux';

import { toggleModal } from 'redux/modal/modalSlice';

export const Modal = ({ children, setIsModal }) => {
  const dispatch = useDispatch();
  return ReactDOM.createPortal(
    <>
      <Backdrop>
        <Window>
          {children}
          {/* <div
            onClick={() => {
              dispatch(toggleModal());
            }}
          >
            close
          </div> */}
          <button
            type="button"
            onClick={() => {
              setIsModal(false);
            }}
          >
            X
          </button>
        </Window>
      </Backdrop>
      <BackdropShadow />
    </>,
    document.querySelector('#root-modal')
  );
};
