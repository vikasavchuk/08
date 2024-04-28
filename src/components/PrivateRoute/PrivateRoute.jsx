import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const PrivateRoute = ({ children, redirectTo = "/login" }) => {
  const isSignedIn = useSelector(selectIsLoggedIn);

  return isSignedIn ? children : <Navigate to={redirectTo} />;
};

export default PrivateRoute;