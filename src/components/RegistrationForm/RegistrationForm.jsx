import { Formik, Form, Field, ErrorMessage } from "formik";
import { object, string } from "yup";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";

const init = {
  name: "",
  email: "",
  password: "",
};

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const onRegister = (formData) => {
    dispatch(register(formData));
  };

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
        <label>
            Name
            <Field
              type="text"
              name="name"
              placeholder="Viktoriia Savchuk"
            />
          </label>
          <span>
            <ErrorMessage name="name" as="span" />
          </span>

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
            Registration
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;