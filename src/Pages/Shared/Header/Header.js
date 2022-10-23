import React from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png';
import './Header.css'
const Header = () => {
    return (
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="white"
        className="py-3"
        sticky="top"
      >
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <Image src={logo} />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto nav-custom-med">
              <NavDropdown title="Departments" id="collasible-nav-dropdown">
                <Link to="/department/1" className="ps-4 text-decoration-none">
                  Neurology
                </Link>
                <NavDropdown.Divider />
                <Link to="/department/2" className="ps-4 text-decoration-none">
                  Gynecology
                </Link>
                <NavDropdown.Divider />
                <Link to="/department/3" className="ps-4 text-decoration-none">
                  Cardiology
                </Link>
                <NavDropdown.Divider />
                <Link to="/department/4" className="ps-4 text-decoration-none">
                  Orthopedics
                </Link>
                <NavDropdown.Divider />
                <Link to="/department/5" className="ps-4 text-decoration-none">
                  Surgery
                </Link>
                <NavDropdown.Divider />
                <Link to="/department/5" className="ps-4 text-decoration-none">
                  Dermatology
                </Link>
              </NavDropdown>
              <Nav.Link>
                <Link className="text-decoration-none" to="/alldoctors">
                  Doctors
                </Link>
              </Nav.Link>
              <Nav.Link>
                {" "}
                <Link className="text-decoration-none" to="/blog">
                  Blogs
                </Link>
              </Nav.Link>
              <Nav.Link>
                {" "}
                <Link className="text-decoration-none" to="/contact">
                  Cotnatct Us
                </Link>
              </Nav.Link>
            </Nav>
            <Nav>
              <Link to="/login">
                <Button variant="warning" className="me-3">
                  LogIn
                </Button>{" "}
              </Link>
              <Link to="/signup">
                <Button variant="outline-warning">SignUp</Button>{" "}
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;