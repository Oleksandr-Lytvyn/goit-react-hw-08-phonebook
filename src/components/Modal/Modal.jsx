export const Modal = ({ onClick, children }) => {
  return (
    <div>
      {children}
      <button
        onClick={() => {
          onClick(false);
          console.log('click');
        }}
      >
        close!
      </button>
    </div>
  );
};
