import { Button } from 'components/Button/Button';
import { useNavigate } from 'react-router-dom';

export const BackButton = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate('/welcome', { replace: true });
  };
  return (
    <Button type="button" onClick={onClick}>
      go back
    </Button>
  );
};
