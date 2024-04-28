import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const RestrictedRoute = ({ children, redirectTo = "/contacts" }) => {
  const isSignedIn = useSelector(selectIsLoggedIn);

  return isSignedIn ? <Navigate to={redirectTo} /> : children;
};

export default RestrictedRoute;