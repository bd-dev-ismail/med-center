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
          <Navbar.Brand href="#home">
            <Image src={logo} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto nav-custom-med">
              <NavDropdown title="Departments" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Neurology
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.2">
                  Gynecology
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.3">
                  Cardiology
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Orthopedics
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.5">Surgery</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.6">
                  Dermatology
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#features">Doctors</Nav.Link>
              <Nav.Link href="#pricing">Blogs</Nav.Link>
              <Nav.Link href="#pricing">Contact Us</Nav.Link>
            </Nav>
            <Nav>
              <Link to="/login">
                <Button variant="warning" className="me-3">LogIn</Button>{" "}
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