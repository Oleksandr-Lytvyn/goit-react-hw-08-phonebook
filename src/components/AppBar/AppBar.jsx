import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import css from './AppBar.module.css';

import { useAuth } from 'hooks';
import { ContactInfo } from 'components/ContactInfo/ContactInfo';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header>
      <div className={css.wrapper}>
        <h2>phonebook</h2>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </div>
    </header>
  );
};
