import { useDispatch } from "react-redux";
import { RiMailCheckLine } from "react-icons/ri";
import { Si1Password } from "react-icons/si";
import { Formik, Form, Field } from "formik";
import s from "./FormLogIn.module.css";
import { logIn } from "redux/auth";

function validateEmail(value) {
  let error;
  if (!value) {
    error = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = "Invalid email address";
  }
  return error;
}

function validatePassword(value) {
  let error;
  if (value === "admin") {
    error = "Nice try!";
  }
  return error;
}

const FormLogIn = () => {
  const dispatch = useDispatch();

  const onFormSubmit = (user) => {
    dispatch(logIn(user));
  };
  return (
    <div>
      <h2>Log In</h2>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(values, { resetForm }) => {
          const { email, password } = values;
          onFormSubmit({ email, password });
          console.log(values);
          resetForm();
        }}
      >
        {({ errors, touched, isValidating }) => (
          <Form className={s.fieldFormLogIn}>
            <RiMailCheckLine
              className={s.fieldIcon}
              color='#75ecec'
            ></RiMailCheckLine>
            <Field
              className={s.fieldLogIn}
              name='email'
              validate={validateEmail}
            />
            {errors.email && touched.email && <div>{errors.email}</div>}
            <Si1Password className={s.fieldIcon} color='#75ecec'></Si1Password>
            <Field
              className={s.fieldLogIn}
              name='password'
              validate={validatePassword}
            />
            {errors.password && touched.password && (
              <div>{errors.password}</div>
            )}

            <button className={s.logInBtn} type='submit'>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default FormLogIn;
