import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { object, string } from "yup";

const init = {
  name: "",
  email: "",
  password: "",
};

const RegistrationForm = ({ onRegister }) => {
  const nameId = useId();
  const numberId = useId();

  const RigisterSchema = object().shape({
    name: string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: string().email("Must be a valid email").required("Required"),
    password: string().min(8, "Too Short!").required("Required"),
  });

  const handleSubmit = (value, actions) => {
    onRegister(value);

    actions.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={init}
        onSubmit={handleSubmit}
        validationSchema={RigisterSchema}
      >
        <Form>
          <label htmlFor={nameId}>Name</label>
          <Field
            type="text"
            name="name"
            id={nameId}
            placeholder="Viktoriia Savchuk"
          />
          <span>
            <ErrorMessage name="name" as="span" />
          </span>

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
            registration
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;