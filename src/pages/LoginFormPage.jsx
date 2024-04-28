import { useDispatch } from "react-redux";
import LoginForm from "../components/LoginForm/LoginForm";
import { login } from "../redux/auth/operations";

const LoginFormPage = () => {
  const dispatch = useDispatch();
  const onLogin = (formData) => {
    dispatch(login(formData));
  };
  return (
    <div>
      <h1>Login</h1>
      <LoginForm onLogin={onLogin} />
    </div>
  );
};

export default LoginFormPage;