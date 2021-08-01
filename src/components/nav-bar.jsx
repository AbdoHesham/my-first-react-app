import React from "react";
import {  Nav, Navbar, Container, Badge } from "react-bootstrap";
const Nav_bar = props => {
  return ( 
<Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto text-center">
              <Nav.Link to="/">Home</Nav.Link>
              <Nav.Link to="/about">about</Nav.Link>
           

              <Nav.Link to="/cart">
                cart
                {props.itemCount > 0 && (
                  <Badge bg="secondary">{props.itemCount}</Badge>
                )}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
   );
}
 
export default Nav_bar;

