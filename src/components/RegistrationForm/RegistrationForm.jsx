import { useDispatch } from 'react-redux';
import { register } from 'redux/Auth/auth-operations';

export function RegistrationForm() {
  const dispatch = useDispatch();
  function onSubmit(event) {
    event.preventDefault();
    console.log(event.target.email.value);
    console.log(event.target.password.value);
    dispatch(
      register({
        name: event.target.name.value,
        email: event.target.email.value,
        password: event.target.password.value,
      })
    );
  }
  return (
    <>
      <form action="" onSubmit={onSubmit}>
        <label htmlFor="">
          <input type="text" name="name" /> name
        </label>
        <label htmlFor="">
          <input type="text" name="email" /> email
        </label>
        <label htmlFor="">
          <input type="text" name="password" /> password
        </label>
        <button type="submit">register</button>
      </form>
    </>
  );
}
