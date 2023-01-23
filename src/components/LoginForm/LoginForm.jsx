import { useDispatch } from 'react-redux';
import { logIn } from 'redux/Auth/auth-operations';
import css from './LoginForm.module.css';

export const LoginForm = ({ isModal }) => {
  const dispatch = useDispatch();
  const onSubmit = event => {
    event.preventDefault();
    isModal(false);
    dispatch(
      logIn({
        email: event.target.email.value,
        password: event.target.password.value,
      })
    );
  };
  return (
    <>
      <form action="" onSubmit={onSubmit}>
        <label htmlFor="">
          <input type="text" name="email" /> email
        </label>
        <label htmlFor="">
          <input type="text" name="password" /> password
        </label>
        <button type="submit">login</button>
      </form>
    </>
  );
};
