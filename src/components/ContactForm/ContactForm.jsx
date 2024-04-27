import css from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { object, string } from "yup";
import { useId } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps.js";

const initialValues = {
  name: "",
  number: "",
};

const ContactForm = () => {
  const dispatch = useDispatch();
  const nameId = useId();
  const numberId = useId();

  const FeedbackSchema = object().shape({
    name: string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: string()
      .min(3, "Too Short!")
      .max(20, "Too Long!")
      .required("Required"),
  });

  const handleSubmit = (value, actions) => {
    dispatch(addContact(value));

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <label htmlFor={nameId}>
         Name
          <Field className={css.inpuForm} name="name" id={nameId} type="text" placeholder="Rosie Simpson" />
          <ErrorMessage name="name" component="span" className={css.error} />
        </label>
        <label htmlFor={numberId}>
        Number
          <Field className={css.inpuForm} name="number" id={numberId} type="text" placeholder="406-75-06" />
          <ErrorMessage name="number" component="span" className={css.error} />
        </label>

        <button className={css.buttoForm} type="submit">
        Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;