import ReactDOM from 'react-dom';
import { Backdrop, BackdropShadow, Window } from './Modal.styled';

export const Modal = ({ children, setIsModal }) => {
  return ReactDOM.createPortal(
    <>
      <Backdrop>
        <Window>modal window{children}</Window>
        <button
          type="button"
          onClick={() => {
            setIsModal(false);
          }}
        >
          X
        </button>
      </Backdrop>
      <BackdropShadow />
    </>,
    document.querySelector('#root-modal')
  );
};
