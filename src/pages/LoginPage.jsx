import { BackButton } from 'components/BackButton/BackButton';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { WelcomeSection } from 'components/Welcome/Welcome.styled';

export default function Login() {
  return (
    <WelcomeSection>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '40px',
        }}
      >
        <LoginForm />
        <BackButton />
      </div>
    </WelcomeSection>
  );
}
