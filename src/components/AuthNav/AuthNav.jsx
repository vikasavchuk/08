import clsx from "clsx";
import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";

const buildLinkClass = ({ isActive }) => {
  return clsx(isActive && css.active);
};

const AuthNav = () => {
  return (
    <div>
      <NavLink className={buildLinkClass} to="/register">
        Registration
      </NavLink>
      <NavLink className={buildLinkClass} to="/login">
        Login
      </NavLink>
    </div>
  );
};

export default AuthNav;