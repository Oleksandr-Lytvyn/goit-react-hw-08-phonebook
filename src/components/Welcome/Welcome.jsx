import { Link } from 'react-router-dom';
import { WelcomeBox, WelcomeSection } from './Welcome.styled';

export default function Welcome() {
  return (
    <WelcomeSection>
      <WelcomeBox>
        <h1>welcome!</h1>
        <Link to={'/register'}> Register </Link>
        <Link to={'/login'}> Login </Link>
      </WelcomeBox>
    </WelcomeSection>
  );
}
