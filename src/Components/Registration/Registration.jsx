import { useDispatch } from "react-redux";
import { signUp } from "redux/auth";
import { Formik, Field, Form } from "formik";
import { Contain } from "Components/Container/Container.syled";
import s from "./Registration.module.css";

function Registration() {
  const dispatch = useDispatch();
  const handleOnSubmit = (newUser) => {
    dispatch(signUp(newUser));
  };

  return (
    <div className={s.containerRegistration}>
      <h2>Craete your account</h2>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={(values, { resetForm }) => {
          const { name, email, password } = values;
          handleOnSubmit({ name, email, password });
          resetForm();
        }}
      >
        <Contain>
          <Form>
            <label htmlFor='name'>User Name</label>
            <Field
              className={s.fieldRegistration}
              id='name'
              name='name'
              placeholder='Tumba Umba'
            />
            <label htmlFor='email'>Email</label>
            <Field
              className={s.fieldRegistration}
              id='email'
              name='email'
              placeholder='example@example.com'
              type='email'
            />
            <label htmlFor='password'>Password</label>
            <Field
              className={s.fieldRegistration}
              id='password'
              name='password'
              placeholder='*******'
            />
            <button className={s.signUpBtn} type='submit'>
              Sign Up
            </button>
          </Form>
        </Contain>
      </Formik>
    </div>
  );
}

export default Registration;
