import { BackButton } from 'components/BackButton/BackButton';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { WelcomeSection } from 'components/Welcome/Welcome.styled';

export default function RegisterPage() {
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
        <RegisterForm />
        <BackButton />
      </div>
    </WelcomeSection>
  );
}
