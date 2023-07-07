import { BackButton } from 'components/BackButton/BackButton';
import MyLoader from 'components/Loader/Loader';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { WelcomeSection } from 'components/Welcome/Welcome.styled';
import { useSelector } from 'react-redux';

export default function RegisterPage() {
  const isLoading = useSelector(state => state.auth.isLoading);
  return (
    <>
      {isLoading && <MyLoader />}
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
    </>
  );
}
