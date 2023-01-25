import { logOut } from 'redux/Auth/auth-operations';
import { useDispatch, useSelector } from 'react-redux';
import pic from '../../images/user.jpg';
import css from './UserNav.module.css';
import { useNavigate } from 'react-router-dom';

export const UserNav = () => {
  const name = useSelector(state => state.auth.user.name);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onClick = () => {
    dispatch(logOut());
    navigate('/');
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
        <button
          type="button"
          onClick={() => {
            navigate('/');
          }}
        >
          home
        </button>
        <button type="button" onClick={onClick}>
          log out
        </button>
      </div>
    </>
  );
};