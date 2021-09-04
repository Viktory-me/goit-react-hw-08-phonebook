import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { getIsLoggedIn } from "redux/auth";

function PrivateRoute({ children, ...routeProps }) {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <Route {...routeProps}>
      {isLoggedIn ? children : <Redirect to='/login' />}
    </Route>
  );
}

export default PrivateRoute;
