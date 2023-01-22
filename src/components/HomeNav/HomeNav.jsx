// import { ContactList } from 'components/ContactList/ContactList';
import { logOut } from 'redux/Auth/auth-operations';
import { useDispatch, useSelector } from 'react-redux';
import pic from '../../images/user.jpg';
import { HomeNavStyled } from './HomeNav.styled';

export const HomeNav = () => {
  const name = useSelector(state => state.auth.user.name);
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(logOut());
  };

  return (
    <>
      <HomeNavStyled>
        <img
          src={pic}
          alt="user pic"
          style={{ width: '35px', height: '35px' }}
        />
        <p>{name}</p>
        <button type="button" onClick={onClick}>
          log out
        </button>
      </HomeNavStyled>
    </>
  );
};
