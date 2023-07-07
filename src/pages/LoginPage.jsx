import { BackButton } from 'components/BackButton/BackButton';
import MyLoader from 'components/Loader/Loader';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { WelcomeSection } from 'components/Welcome/Welcome.styled';
import { useSelector } from 'react-redux';

export default function Login() {
  const isLoading = useSelector(state => state.auth.isLoading);
  console.log(isLoading);
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
          <LoginForm />
          <BackButton />
        </div>
      </WelcomeSection>
    </>
  );
}
