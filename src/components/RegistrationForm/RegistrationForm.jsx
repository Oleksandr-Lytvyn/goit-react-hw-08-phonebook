import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register } from 'redux/Auth/auth-operations';
import css from './RegistrationForm.module.css';

export const RegistrationForm = ({ isModal }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = event => {
    event.preventDefault();
    // isModal(false);
    navigate('/');
    dispatch(
      register({
        name: event.target.name.value,
        email: event.target.email.value,
        password: event.target.password.value,
      })
    );
  };
  return (
    <>
      <form className={css.reg_form} action="" onSubmit={onSubmit}>
        <label htmlFor="">
          <input type="text" name="name" placeholder="name" required />
        </label>
        <label htmlFor="">
          <input type="text" name="email" placeholder="email" required />
        </label>
        <label htmlFor="">
          <input type="text" name="password" placeholder="password" required />
        </label>
        <button className={css.button_reg} type="submit">
          register
        </button>
      </form>
    </>
  );
};
