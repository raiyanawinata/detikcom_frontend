import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css';
import { NavLink } from 'react-router-dom';

function HeaderNav() {
  return (
    <Navbar collapseOnSelect expand="lg" className="custom-nabar" style={{ backgroundColor: "#007cbd" }}>
      <Container>
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={require("../../../src/assets/img/Navbar Brand.png")} alt="Navbar Brand" className="img-fluid" style={{ height: "100%" }} />
          </div>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="navbar-toggler" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <nav className="d-flex w-100 justify-content-end">
            <ul className="navbar-nav nav-list">
              <li>
                <NavLink
                  to="*"
                  activeClassName="active"
                  className="nav-link"
                  style={{ color: "white" }}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="*"
                  activeClassName="active"
                  className="nav-link"
                  style={{ color: "white" }}
                >
                  Mechanisme
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="*"
                  activeClassName="active"
                  className="nav-link"
                  style={{ color: "white" }}
                >
                  Latest Update
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/register"
                  activeClassName="active"
                  className="nav-link"
                  style={{ paddingTop: "6px", marginLeft: "10px", color: "#007cbd" }}
                >
                  Register
                </NavLink>
              </li>
            </ul>
          </nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderNav;
