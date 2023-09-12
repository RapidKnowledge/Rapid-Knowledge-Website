import React from "react"
import "./Appbar.css"
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Appbar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary sticky-top">
      <Container>
        <Navbar.Brand href="#home"><Link className="navtext1" to="/">Rapid Knowledge  ...<i class="bi bi-rocket-takeoff-fill"></i></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="#home"><Link className="navtext" to="/"><i class="bi bi-house-fill"></i> Home</Link></Nav.Link>
            <Nav.Link href="#about"><Link className="navtext" to="/About"><i class="bi bi-file-person"></i> About</Link></Nav.Link>
            <Nav.Link href="#explore"><Link className="navtext" to="/Explore"><i class="bi bi-globe-asia-australia"></i> Explore</Link></Nav.Link>
            <Nav.Link href="#contact"><Link className="navtext" to="/Contact"><i class="bi bi-person-lines-fill"></i> Contact</Link></Nav.Link>
            
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Appbar
