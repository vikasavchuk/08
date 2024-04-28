import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { object, string } from "yup";

const init = {
  email: "",
  password: "",
};

const LoginForm = ({ onLogin }) => {
  const nameId = useId();
  const numberId = useId();

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
          <label htmlFor={nameId}>Email</label>
          <Field
            type="text"
            name="email"
            id={nameId}
            placeholder="s.vika02030@gmail.com"
          />
          <span>
            <ErrorMessage name="email" as="span" />
          </span>
          <label htmlFor={numberId}>Password</label>
          <Field
            type="password"
            name="password"
            id={numberId}
            placeholder="password"
          />
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