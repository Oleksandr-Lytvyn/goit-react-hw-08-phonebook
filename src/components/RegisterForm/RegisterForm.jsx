import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { useFormik } from 'formik';

import { Button } from 'components/Button/Button';
import { LoginFormStyled } from 'components/LoginForm/LoginForm.styled';
import { ErrorMes, InptBox } from './RegisterForm.styled';

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

  const validate = values => {
    const errors = {};
    if (!values.name) {
      errors.name = 'Required';
    } else if (values.name.length > 10) {
      errors.name = 'Must be 10 characters or less';
    }

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
      name: '',
      email: '',
      password: '',
    },
    validate,
    onSubmit: values => {
      console.log(values);
      dispatch(
        register({
          name: values.name,
          email: values.email,
          password: values.password,
        })
      );
    },
  });

  return (
    <LoginFormStyled onSubmit={formik.handleSubmit} autoComplete="off">
      <InptBox>
        <input
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          placeholder="name"
        />
        {formik.touched.name && formik.errors.name ? (
          <ErrorMes>{formik.errors.name}</ErrorMes>
        ) : null}
      </InptBox>
      <InptBox>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          placeholder="email"
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
        />
        {formik.touched.password && formik.errors.password ? (
          <ErrorMes>{formik.errors.password}</ErrorMes>
        ) : null}
      </InptBox>

      <Button type="submit">Register</Button>
    </LoginFormStyled>
    // <LoginFormStyled onSubmit={handleSubmit} autoComplete="off">
    //   <input name="name" required={true} placeholder="name" />
    //   <input name="email" required={true} placeholder="email" />
    //   <input
    //     name="password"
    //     required={true}
    //     type="password"
    //     placeholder="password"
    //   />
    //   <Button type="submit" variant="outlined">
    //     Register
    //   </Button>
    //   {/* <BackButton /> */}
    // </LoginFormStyled>
  );
};
