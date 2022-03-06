import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import personInfo from "../data/persons.json";

function NavbarComponent() {
  return (
    <Navbar bg="black" expand="lg">
      <Container className="bar">
        <Navbar.Brand className="navTop" href="/">
          Top Five Irish Famous People
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="navLink" href="/">
              Home
            </Nav.Link>
            <LinkContainer to="/about">
              <Nav.Link className="navLink">About</Nav.Link>
            </LinkContainer>
            <NavDropdown className="navLink" title="Explore" id="basic-nav-dropdown">
              {personInfo.map((person) => (
                <LinkContainer key={person.id} to={`/person/#${person.id}`}>
                  <NavDropdown.Item>{person.name}</NavDropdown.Item>
                </LinkContainer>
              ))}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
