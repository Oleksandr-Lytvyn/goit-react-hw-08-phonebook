import css from './Modal.module.css';

export const Modal = ({ children }) => {
  return (
    <div className={css.modal}>
      {/* <button
        className={css.close}
        onClick={() => {
          onClick(false);
        }}
      >
        X
      </button> */}
      {children}
    </div>
  );
};
