import ReactDOM from 'react-dom';

export const Modal = ({ children, setIsModal }) => {
  return ReactDOM.createPortal(
    <>
      <div>modal window{children}</div>
      <button
        type="button"
        onClick={() => {
          setIsModal(false);
        }}
      >
        X
      </button>
    </>,
    document.querySelector('#root-modal')
  );
};
