import { Component } from "react";
import React from 'react';
import { Navbar, Container, NavLink, Nav } from "react-bootstrap";
import Button from '@material-ui/core/Button';
import './landingpage.css';


class Navigation extends Component {
  render() {
    return(
      <Navbar bg="primary" variant="dark" fixed="top">
      <Container className="nav-l">
      <Navbar.Brand href="/">
      <img src="https://img.icons8.com/color/48/000000/microsoft.png" width="30" height="30" class="d-inline-block align-top" alt=""></img>
      TEAMS
      </Navbar.Brand>
      
      
      <Nav className="me-auto">
        <Nav.Link href="/"><Button variant="contained">Home</Button></Nav.Link>
        
      </Nav>
      </Container>
    </Navbar>

    );
  }
}

export default Navigation