import { useDispatch } from 'react-redux';
import { logIn } from 'redux/Auth/auth-operations';

export function LoginForm({ isModal }) {
  const dispatch = useDispatch();
  function onSubmit(event) {
    event.preventDefault();
    isModal(false);
    dispatch(
      logIn({
        email: event.target.email.value,
        password: event.target.password.value,
      })
    );
  }
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
}
