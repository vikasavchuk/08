import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";

const UserMenu = () => {
  const userData = useSelector(selectUser);
  const dispatch = useDispatch();
  return (
    <div>
      <p>Welcome, {userData.name}✌</p>
      <button
        onClick={() => dispatch(logout())}
        type="button"
      >
        Logout
      </button>
    </div>
  );
};
export default UserMenu;