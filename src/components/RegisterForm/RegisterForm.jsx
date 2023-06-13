import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

import css from '../LoginForm/LoginForm.module.css';
import { BackButton } from 'components/BackButton/BackButton';
import { Button } from 'components/Button/Button';

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

    form.reset();
  };

  return (
    <form className={css.login_form} onSubmit={handleSubmit} autoComplete="off">
      <input name="name" required={true} placeholder="name" />
      <input name="email" required={true} placeholder="email" />
      <input
        name="password"
        required={true}
        type="password"
        placeholder="password"
      />
      <Button type="submit" variant="outlined">
        Register
      </Button>
      {/* <BackButton /> */}
    </form>
  );
};
