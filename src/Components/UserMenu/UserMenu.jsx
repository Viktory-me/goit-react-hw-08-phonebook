import { useDispatch, useSelector } from "react-redux";
import { getUserName } from "redux/auth";
import { logOut } from "redux/auth";
import s from "./UserMenu.module.css";

function UserMenu() {
  const username = useSelector(getUserName);
  const dispatch = useDispatch();

  return (
    <div className={s.containerUser}>
      <p> {`Welcome, ${username}`}</p>
      <button type='button' onClick={() => dispatch(logOut())}>
        Log Out
      </button>
    </div>
  );
}

export default UserMenu;
