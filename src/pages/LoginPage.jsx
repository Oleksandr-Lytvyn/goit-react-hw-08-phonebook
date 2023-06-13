import { BackButton } from 'components/BackButton/BackButton';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { WelcomeSection } from 'components/Welcome/Welcome.styled';

export default function Login() {
  return (
    <WelcomeSection>
      <LoginForm />
      <BackButton />
    </WelcomeSection>
  );
}
