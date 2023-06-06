import { Link } from 'react-router-dom';
import css from './Home.module.css';

export default function Home() {
  return (
    <div className={css.page_wrapper}>
      <h1>Phonebook</h1>
      <div className={css.auth_wrapper}>
        <Link className={css.auth_link} to={'register'}>
          {' '}
          Register{' '}
        </Link>
        <Link className={css.auth_link} to={'login'}>
          {' '}
          Login{' '}
        </Link>
      </div>
    </div>
  );
}
