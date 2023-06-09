import { useNavigate } from 'react-router-dom';

export const BackButton = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate('/welcome', { replace: true });
  };
  return (
    <button type="button" onClick={onClick}>
      go back
    </button>
  );
};
