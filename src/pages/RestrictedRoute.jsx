import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsSignedIn } from "../redux/auth/selectors";

const RestrictedRoute = ({ children, redirectTo = "/contacts" }) => {
  const isSignedIn = useSelector(selectIsSignedIn);

  return isSignedIn ? <Navigate to={redirectTo} /> : children;
};

export default RestrictedRoute;