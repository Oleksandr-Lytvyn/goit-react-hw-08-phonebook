import { Link } from 'react-router-dom';

import css from './Home.module.css';

export default function Welcome() {
  return (
    <div className={css.page_wrapper}>
      <h1>welcome!</h1>
      <Link className={css.auth_link} to={'/register'}>
        {' '}
        Register{' '}
      </Link>
      <Link className={css.auth_link} to={'/login'}>
        {' '}
        Login{' '}
      </Link>
    </div>
  );
}
