import clsx from "clsx";
import { NavLink } from "react-router-dom";
import css from "./Layout.module.css";
import { useSelector } from "react-redux";
import { selectIsSignedIn, selectUserData } from "../../redux/auth/selectors";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/auth/operations";

const buildLinkClass = ({ isActive }) => {
  return clsx(isActive && css.active);
};

const Layout = ({ children }) => {
  const isSignedIn = useSelector(selectIsSignedIn);
  const userData = useSelector(selectUserData);
  const dispatch = useDispatch();
  // const onLogout = () => dispatch(logout());
  return (
    <div>
      <div>
        <header>
          {isSignedIn ? (
            <>
              <NavLink to="/" className={buildLinkClass}>
                Home
              </NavLink>
              <NavLink to="/contacts" className={buildLinkClass}>
                Contacts
              </NavLink>
              <span>Hello {userData.name}</span>
              <button onClick={() => dispatch(logout())} type="button">
                Logout
              </button>
            </>
          ) : (
            <>
              <NavLink to="/register" className={buildLinkClass}>
                Registration
              </NavLink>
              <NavLink to="/login" className={buildLinkClass}>
                Login
              </NavLink>
            </>
          )}
        </header>
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;