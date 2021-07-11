import { render } from '@testing-library/react';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ParticlesBg from 'particles-bg';
import './landingpage.css';
import { Navbar, Container, Nav } from "react-bootstrap";
import Button from '@material-ui/core/Button';



class Landingpage extends Component {
    render(){
    return (
        <div id="landingp">
          <Navbar bg="primary" variant="dark">
          <Container className="nav-l">
          <Navbar.Brand href="/" className="justify-content-left">
          <img src="https://img.icons8.com/color/48/000000/microsoft.png" width="30" height="30" class="d-inline-block align-top" alt=""></img>
          TEAMS
           </Navbar.Brand>
           
           <Nav className="me-auto">
           <Nav.Link href="/home" className="justify-content-end"><Button variant="contained" align="right">Get Started</Button></Nav.Link>
           </Nav>
           </Container>
           </Navbar>

           <div className="container1">
           <ParticlesBg type="lines" num={450} bg={true} />
            <div className="card-c">
             <p class="text-light">
                BUILD. CONNECT. COLLABORATE.
               <p class="text-light" className="para-e">
                A Simple Video Calling website to 
                <br />
                connect your friends and family.
                <br />
                You can simply invite them using
                <br />
                 invite link and enjoy video calling.
                <br />

                <br />
                <Link to="/home">
                <Button variant="contained" align="right">Get Started</Button>
                </Link>
                </p>
              </p>
          
            </div>
            </div>
            
          </div>
         
      );
    };
    
}


export default Landingpage
