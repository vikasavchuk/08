import { useSelector } from "react-redux";
import { selectIsSignedIn } from "../../redux/auth/selectors";
import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";

const buildLinkClass = ({ isActive }) => {
  return clsx(isActive && css.active);
};

const Navigation = () => {
  const isLogin = useSelector(selectIsSignedIn);
  return (
    <div>
      <nav>
        <NavLink className={buildLinkClass} to="/">
          Home
        </NavLink>
        <NavLink className={buildLinkClass} to="/register">
          Registration
        </NavLink>
        <NavLink className={buildLinkClass} to="/login">
          Login
        </NavLink>

        {isLogin && (
          <NavLink className={buildLinkClass} to="/contacts">
            Contacts
          </NavLink>
        )}
      </nav>
    </div>
  );
};

export default Navigation;