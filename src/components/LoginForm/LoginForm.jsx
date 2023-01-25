import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/Auth/auth-operations';
import css from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = event => {
    event.preventDefault();
    navigate('/');

    dispatch(
      logIn({
        email: event.target.email.value,
        password: event.target.password.value,
      })
    );
  };
  return (
    <>
      <form className={css.login_form} action="" onSubmit={onSubmit}>
        <label htmlFor="">
          <input type="text" name="email" placeholder="email" required />
        </label>
        <label htmlFor="">
          <input type="text" name="password" placeholder="password" required />
        </label>
        <button className={css.button_login} type="submit">
          login
        </button>
      </form>
    </>
  );
};
