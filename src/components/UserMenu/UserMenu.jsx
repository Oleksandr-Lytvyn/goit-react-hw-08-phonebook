import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';

// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { purple } from '@mui/material/colors';
// import Button from '@mui/material/Button';

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: purple[500],
//     },
//     secondary: {
//       main: '#fff',
//     },
//   },
// });

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const handleLogOut = () => dispatch(logOut());

  return (
    <div>
      <p>{user.email}</p>
      <button
        onClick={handleLogOut}
        size="small"
        variant="outlined"
        color="secondary"
      >
        Logout
      </button>
    </div>
  );
};
