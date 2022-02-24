import React from "react";
import { Navbar, Container, Nav} from "react-bootstrap";
import {Link} from 'react-router-dom';

export const Navegacion = ({ title }) => {

  const estilos = {
    color: "white",
    textAlign: "center",
  };

  const textLink = {
    color: 'inherit',
    textDecoration: 'inherit'
}
  return (
    <div>
      <Navbar bg="dark" variant="dark" fixed='top'>
        <Container>
          <Navbar.Brand ><Link style={textLink} to='/home'>{title}</Link></Navbar.Brand>
          <Nav className="me-auto">

            <Nav.Link><Link style={textLink} to='/home'>Home</Link></Nav.Link>
            <Nav.Link><Link style={textLink} to='/about'>About</Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};
