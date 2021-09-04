import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "redux/auth";
import s from "./MainNav.module.css";

function MainNav() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <div className={s.mainNavHeader}>
      <NavLink className={s.linkNav} to='/' exact>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={s.linkNav} to='/contacts' exact>
          Contacts
        </NavLink>
      )}
    </div>
  );
}

export default MainNav;
