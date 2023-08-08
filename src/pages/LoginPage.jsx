import { BackButton } from 'components/BackButton/BackButton';
import MyLoader from 'components/Loader/Loader';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { WelcomeSection } from 'components/Welcome/Welcome.styled';
import { useSelector } from 'react-redux';
import Notiflix from 'notiflix';

Notiflix.Notify.init({
  position: 'center-center',
  timeout: 5000,
});

export default function Login() {
  const isLoading = useSelector(state => state.auth.isLoading);
  const error = useSelector(state => state.auth.errorMessage);
  return (
    <>
      {isLoading && <MyLoader />}
      {error && Notiflix.Notify.failure(error)}
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
