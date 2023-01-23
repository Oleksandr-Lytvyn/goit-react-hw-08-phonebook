import css from './Modal.module.css';

export const Modal = ({ onClick, children }) => {
  return (
    <div className={css.modal}>
      <button
        className={css.close}
        onClick={() => {
          onClick(false);
          console.log('click');
        }}
      >
        X
      </button>
      {children}
    </div>
  );
};
