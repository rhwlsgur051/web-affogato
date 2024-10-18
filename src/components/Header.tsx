import { Container, Nav, Navbar } from "react-bootstrap";
import { useLocation } from "react-router-dom";

export const HeaderComponent = () => {
  const { pathname } = useLocation();
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">KoJH</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="home">Profile</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
