import { useDispatch, useSelector } from "react-redux";
import { lazy, Suspense } from "react";
import { useEffect } from "react";
import { Switch, Redirect } from "react-router-dom";
import "./App.css";

// import { getLoading } from "./redux/contacts/contactsSelector";
import PrivateRoute from "./Components/Routes/PrivateRoute";
import PublicRoute from "./Components/Routes/PublicRoute";
import NavBar from "Components/NavBar/NavBar";
import Container from "Components/Container/Container";
import Loader from "Components/Loader/Loader";
import { getCurrentUser, getIsFetchUser } from "redux/auth";

const HomePage = lazy(() =>
  import("./pages/HomePage" /* webpackChunkName: "home" */)
);

const RegisterPage = lazy(() =>
  import("./pages/RegisterPage" /* webpackChunkName: "register" */)
);

const LoginPage = lazy(() =>
  import("./pages/LoginPage" /* webpackChunkName: "login" */)
);

const ContactsPage = lazy(() =>
  import("./pages/ContactsPage" /* webpackChunkName: "contacts" */)
);

function App() {
  const dispatch = useDispatch();
  const isFetchUser = useSelector(getIsFetchUser);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);
  return (
    !isFetchUser && (
      <>
        <NavBar />
        <Suspense fallback={<Loader />}>
          <Container>
            <Switch>
              <PublicRoute path='/' redirectTo='/contacts' exact>
                <HomePage />
              </PublicRoute>

              <PublicRoute path='/register' exact restricted>
                <RegisterPage />
              </PublicRoute>

              <PublicRoute path='/login' redirectTo='/contacts' restricted>
                <LoginPage />
              </PublicRoute>

              <PrivateRoute path='/contacts'>
                <ContactsPage />
              </PrivateRoute>

              <Redirect to='/' />
            </Switch>
          </Container>
        </Suspense>
      </>
    )
  );
}

export default App;
