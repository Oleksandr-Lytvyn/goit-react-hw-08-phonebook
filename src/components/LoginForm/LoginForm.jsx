import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

import css from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
  };

  return (
    <form className={css.login_form} onSubmit={handleSubmit} autoComplete="off">
      <input name="email" required={true} placeholder="email" />
      <input
        name="password"
        required={true}
        type="password"
        placeholder="password"
      />
      <button type="submit" variant="outlined">
        Log in
      </button>
    </form>
  );
};
