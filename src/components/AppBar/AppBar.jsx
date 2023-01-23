import { AuthNav } from 'components/AuthNav/AuthNav';
import { ContactList } from 'components/ContactList/ContactList';
import { HomeNav } from 'components/HomeNav/HomeNav';
import { useSelector } from 'react-redux';

export const AppBar = () => {
  const isLogged = useSelector(state => state.auth.isLoggedIn);
  return (
    <>
      <div
        style={{
          maxWidth: 960,
          margin: '0 auto',
          // padding: '0 16px',
          backgroundColor: '#c9dde8',
          // height: '100vh',
        }}
      >
        {isLogged ? <HomeNav /> : <AuthNav />}
        {isLogged && <ContactList />}
      </div>
    </>
  );
};
