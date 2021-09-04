import { useSelector } from "react-redux";
import { getIsLoggedIn } from "redux/auth";
import Container from "../Container/Container";
import MainNav from "Components/MainNav/MainNav";
import AuthNav from "Components/AuthNav/AuthNav";
import UserMenu from "Components/UserMenu/UserMenu";
import { Nav, Нeader } from "Components/NavBar/NavBar.styled";

function NavBar() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <Container>
      <Нeader>
        <Nav>
          <MainNav />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Nav>
      </Нeader>
    </Container>
  );
}

export default NavBar;
