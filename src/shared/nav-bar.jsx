import React from "react";
import {  Nav, Navbar, Container, Badge } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const NavBar = props => {
  return ( 
    
<Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand > 
            <span>
            <Link to="/">
            React-Bootstrap
            </Link>
            </span>
    
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto text-center">
              <NavLink className="m-3 navlink" to="/home">Home</NavLink>
              <NavLink className="m-3 navlink" to="/about">about</NavLink>
           

              <NavLink className="m-3 navlink" to="/cart">
                cart
                {props.itemCount > 0 && (
                  <Badge bg="secondary">{props.itemCount}</Badge>
                )}
              </NavLink>
              <NavLink className="m-3 navlink" to="/profile">profile</NavLink>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
   );
}
 
export default NavBar;

