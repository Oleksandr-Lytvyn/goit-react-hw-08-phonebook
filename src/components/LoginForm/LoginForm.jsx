import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { logIn } from 'redux/auth/operations';

import { Button } from 'components/Button/Button';
import { InputStyled, LoginFormStyled } from './LoginForm.styled';
import { ErrorMes, InptBox } from 'components/RegisterForm/RegisterForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const validate = values => {
    const errors = {};

    if (!values.password) {
      errors.password = 'Required';
    } else if (values.password.length < 4) {
      errors.password = 'Must be 4 characters or more';
    }

    if (!values.email) {
      errors.email = 'Required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address';
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate,
    onSubmit: values => {
      dispatch(
        logIn({
          email: values.email,
          password: values.password,
        })
      );
    },
  });

  return (
    <>
      <LoginFormStyled onSubmit={formik.handleSubmit} autoComplete="off">
        <InptBox>
          <InputStyled
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            placeholder="email"
            color={
              formik.touched.email && formik.errors.email ? 'red' : 'black'
            }
          />
          {formik.touched.email && formik.errors.email ? (
            <ErrorMes>{formik.errors.email}</ErrorMes>
          ) : null}
        </InptBox>
        <InptBox>
          <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            placeholder="password"
            color={
              formik.touched.password && formik.errors.password
                ? 'red'
                : 'black'
            }
          />
          {formik.touched.password && formik.errors.password ? (
            <ErrorMes>{formik.errors.password}</ErrorMes>
          ) : null}
        </InptBox>
        <Button type="submit">Log in</Button>
      </LoginFormStyled>
    </>
  );
};
