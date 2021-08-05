import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../App';

function MyNav(){

    return(
        <Navbar variant="dark" bg="dark" className="Nav" expand="md" sticky="top">
          <Navbar.Brand className="Nav-brand" href="/">React-JWT-Blog</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link><Link className="nav-link" to="/">Home</Link></Nav.Link>
              <Nav.Link><Link className="nav-link" to="/blogs">Blogs</Link></Nav.Link>
              <Nav.Link><Link className="nav-link" to="/admin/login">Admin Login</Link></Nav.Link>
              <Nav.Link><Link className="nav-link" to="/admin">Admin Panel</Link></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    );
}

export default MyNav; 