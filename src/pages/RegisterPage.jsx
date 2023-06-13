import { BackButton } from 'components/BackButton/BackButton';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { WelcomeSection } from 'components/Welcome/Welcome.styled';

export default function RegisterPage() {
  return (
    <WelcomeSection>
      <RegisterForm />
      <BackButton />
    </WelcomeSection>
  );
}
