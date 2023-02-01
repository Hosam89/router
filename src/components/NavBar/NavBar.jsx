import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Link, NavLink } from "react-router-dom";
import "./NavBar.scss";

const NavBar = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="navBar"
    >
      <Container className=" ms-0">
        <Link to="/">
          <Navbar.Brand className="p-4 fs-1"> My Article </Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav d-flex">
          <Nav className="ms-auto d-felx gap-5">
            <Nav.Link>
              <NavLink to="/" className="text-light navLink">
                Home
              </NavLink>
            </Nav.Link>

            <Nav.Link>
              <NavLink to="/about" className="text-light">
                About{" "}
              </NavLink>
            </Nav.Link>

            <Nav.Link>
              <NavLink to="/contact" className="text-light">
                Contact
              </NavLink>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
