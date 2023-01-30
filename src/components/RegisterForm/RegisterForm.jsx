import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

import css from '../LoginForm/LoginForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    console.log(register);

    form.reset();
  };

  return (
    <form className={css.login_form} onSubmit={handleSubmit} autoComplete="off">
      <input
        name="name"
        required={true}
        // label="Username"
      />
      <input
        name="email"
        required={true}
        // label="Email"
      />
      <input
        name="password"
        required={true}
        type="password"
        // label="Password"
      />
      {/* <ThemeProvider theme={theme}> */}
      <button type="submit" variant="outlined">
        Register
      </button>
      {/* </ThemeProvider> */}
    </form>
  );
};
