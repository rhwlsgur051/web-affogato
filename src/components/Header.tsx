import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { useUserStore } from "../stores/user";
import { logout } from "../common/util";

export const HeaderComponent = () => {
  const { user } = useUserStore();
  const { pathname } = useLocation();
  return (
    <Navbar bg="dark" data-bs-theme="dark" className="justify-content-between">
      <Container>
        <Navbar.Brand as={Link} to="/">
          KoJH
        </Navbar.Brand>
        <Nav className="me-auto" activeKey={pathname}>
          <Nav.Link as={Link} to="/" eventKey={"/"}>
            Profile
          </Nav.Link>
          <Nav.Link as={Link} to="/feeds" eventKey={"/feeds"}>
            Feed
          </Nav.Link>
        </Nav>
        <Nav activeKey={pathname}>
          {user ? (
            <Nav.Link onClick={logout}>Logout</Nav.Link>
          ) : (
            <Nav.Link as={Link} to="/login" eventKey={"/login"}>
              Login
            </Nav.Link>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};
