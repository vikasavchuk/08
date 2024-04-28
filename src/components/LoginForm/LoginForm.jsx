import { Formik, Form, Field, ErrorMessage } from "formik";
import { object, string } from "yup";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";

const init = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const dispatch = useDispatch();
  const onLogin = (formData) => {
    dispatch(login(formData));
  };

  const RigisterSchema = object().shape({
    email: string().email("Must be a valid email").required("Required"),
    password: string().min(8, "Too Short!").required("Required"),
  });

  const handleSubmite = (value, actions) => {
    onLogin(value);

    actions.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={init}
        onSubmit={handleSubmite}
        validationSchema={RigisterSchema}
      >
        <Form>
        <label>
            Email
            <Field
              type="text"
              name="email"
              placeholder="s.vika02030@gmail.com"
            />
          </label>
          <span>
            <ErrorMessage name="email" as="span" />
          </span>
          <label>
            Password
            <Field
              type="password"
              name="password"
              placeholder="password"
            />
          </label>
          <span>
            <ErrorMessage name="password" as="span" />
          </span>

          <button type="submit">
            Login
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;