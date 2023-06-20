import ReactDOM from 'react-dom';
import { Backdrop, BackdropShadow, Window } from './Modal.styled';
import { ButtonCloseModal } from './Modal.styled';

export const Modal = ({ children, setIsModal }) => {
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
