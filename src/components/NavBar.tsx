import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import HomePage from "./HomePage";
import About from "./About";
import Books from "./Books";
import Free from "./Free";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function NavBar() {
  return (
    <Router>
      <Navbar expand="lg" bg="dark" data-bs-theme="dark" fixed="top">
        <Container>
          <Navbar.Brand className="navbarBrand" href="/">
            <img
              alt=""
              src="/public/logo2.png"
              width="50"
              height="50"
              className="d-inline-block align-top starImg"
            />{" "}
            Lily Sunshine
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link className="nav-link" href="/about">ABOUT</Nav.Link>
              <Nav.Link className="nav-link" href="/books">BOOKS</Nav.Link>
              <Nav.Link className="nav-link" href="/free">FREE CONTENT!</Nav.Link>
              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/books" element={<Books />} />
        <Route path="/free" element={<Free />} />
      </Routes>
    </Router>
  );
}

export default NavBar;
