import { Link } from 'react-router-dom';
import css from './Home.module.css';
// import LinkWrap from '@mui/material/Link';

// const styles = {
//   container: {
//     minHeight: 'calc(100vh - 300px)',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     flexDirection: 'column',
//     marginTop: 20,
//   },
//   link: {
//     textDecoration: 'none',
//     textTransform: 'uppercase',
//     fontWeight: 500,
//     color: '#ffffff',
//   },
// };

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
