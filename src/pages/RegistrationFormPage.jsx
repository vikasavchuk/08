import { useDispatch } from "react-redux";
import RegistrationForm from "../components/RegistrationForm/RegistrationForm";
import { register } from "../redux/auth/operations";

const RegistrationFormPage = () => {
  const dispatch = useDispatch();
  const onRegister = (formData) => {
    dispatch(register(formData));
  };

  return (
    <div>
      <h1>Register</h1>
      <RegistrationForm onRegister={onRegister} />
    </div>
  );
};

export default RegistrationFormPage;