import { Link } from 'react-router-dom';
import { WelcomeBox, WelcomeSection } from './Welcome.styled';
import { Button } from 'components/Button/Button';

export default function Welcome() {
  return (
    <WelcomeSection>
      <WelcomeBox>
        <h1>welcome!</h1>
        <Button>
          <Link to={'/register'}> Register </Link>
        </Button>
        <Button>
          <Link to={'/login'}> Login </Link>
        </Button>
      </WelcomeBox>
    </WelcomeSection>
  );
}
