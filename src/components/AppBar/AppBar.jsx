import { AuthNav } from 'components/AuthNav/AuthNav';
import { ContactList } from 'components/ContactList/ContactList';
import { HomeNav } from 'components/HomeNav/HomeNav';
import { useSelector } from 'react-redux';

export function AppBar() {
  const isLogged = useSelector(state => state.auth.isLoggedIn);
  return (
    <>
      {isLogged ? <HomeNav /> : <AuthNav />}
      <ContactList />
    </>
  );
}
