import { useNavigate } from 'react-router-dom';

export const BackButton = () => {
  const navigate = useNavigate();
  const onClick = () => {
    console.log('click on H1');
    navigate('/welcome', { replace: true });
  };
  return (
    <button type="button" onClick={onClick}>
      go back
    </button>
  );
};
