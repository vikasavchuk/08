import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";

const buildLinkClass = ({ isActive }) => {
  return clsx(isActive && css.active);
};

const Navigation = () => {
  const isLogin = useSelector(selectIsLoggedIn);
  return (
    <div>
      <nav>
        <NavLink className={buildLinkClass} to="/">
          Home
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