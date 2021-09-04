import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getIsLoggedIn } from "redux/auth";
import s from "./Home.module.css";

function Home() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  if (!isLoggedIn) {
    return (
      <div>
        <h2> Welcome to the PHONEBOOK </h2>{" "}
        <p className={s.titleHome}>
          <Link className={s.homeLink} to='/register'>
            {" "}
            Create{" "}
          </Link>{" "}
          your account or{" "}
          <Link className={s.homeLink} to='/login'>
            log in{" "}
          </Link>
          , if you already have it.{" "}
        </p>
      </div>
    );
  }
  return (
    <p className={s.aboutInfo}>
      Add, delete and find your{" "}
      <Link className={s.homeLink} to='/contacts'>
        contacts
      </Link>
    </p>
  );
}

export default Home;
