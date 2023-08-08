import { BackButton } from 'components/BackButton/BackButton';
import MyLoader from 'components/Loader/Loader';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { WelcomeSection } from 'components/Welcome/Welcome.styled';
import { useSelector } from 'react-redux';
import Notiflix from 'notiflix';

export default function RegisterPage() {
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
          <RegisterForm />
          <BackButton />
        </div>
      </WelcomeSection>
    </>
  );
}
