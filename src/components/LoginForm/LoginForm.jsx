import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

import css from './LoginForm.module.css';
import { Button } from 'components/Button/Button';
import { LoginFormStyled } from './LoginForm.styled';

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
    <LoginFormStyled
      className={css.login_form}
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <input name="email" required={true} placeholder="email" />
      <input
        name="password"
        required={true}
        type="password"
        placeholder="password"
      />
      <Button type="submit" variant="outlined">
        Log in
      </Button>
    </LoginFormStyled>
  );
};
