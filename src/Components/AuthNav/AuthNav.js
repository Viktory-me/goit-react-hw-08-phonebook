import { NavLink } from "react-router-dom";
import s from "./AuthNav.module.css";

function AuthNav() {
  return (
    <div className={s.containerAuth}>
      <NavLink className={s.linkAuth} to='/register' exact>
        Sign Up
      </NavLink>
      <NavLink className={s.linkAuth} to='/login' exact>
        Log In
      </NavLink>
    </div>
  );
}

export default AuthNav;
