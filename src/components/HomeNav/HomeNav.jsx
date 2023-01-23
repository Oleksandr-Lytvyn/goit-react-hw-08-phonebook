// import { ContactList } from 'components/ContactList/ContactList';
import { logOut } from 'redux/Auth/auth-operations';
import { useDispatch, useSelector } from 'react-redux';
import pic from '../../images/user.jpg';
import css from './HomeNav.module.css';

export const HomeNav = () => {
  const name = useSelector(state => state.auth.user.name);
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(logOut());
  };

  return (
    <>
      <div className={css.box}>
        <div className={css.userpic}>
          <img
            src={pic}
            alt="user pic"
            style={{ width: '35px', height: '35px' }}
          />
        </div>
        <p>Hello, {name}</p>
        <button type="button" onClick={onClick}>
          log out
        </button>
      </div>
    </>
  );
};
