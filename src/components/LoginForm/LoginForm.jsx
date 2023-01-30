import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { purple } from '@mui/material/colors';

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
    <form onSubmit={handleSubmit} autoComplete="off">
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
        Log in
      </button>
      {/* </ThemeProvider> */}
    </form>
  );
};
