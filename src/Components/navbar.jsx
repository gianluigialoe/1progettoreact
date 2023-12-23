import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import MovieSearch from './Moviesearch';

const CustomNavbar = ({ logo }) => {
  return (
    <Navbar expand="lg" className="bg-dark text-white">
      <Container fluid>
        <Navbar.Brand href="#">
          <img src={logo} style={{ width: '100px', height: '55px' }} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" className="bg-white" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px', color: 'white' }} navbarScroll>
            <Nav.Link href="/" className='text-white'>Home</Nav.Link>
            <Nav.Link href="#" className='text-white'>TV Shows</Nav.Link>
            <Nav.Link href="#" className='text-white'>Movies</Nav.Link>
            <Nav.Link href="#" className='text-white'>Recently Added</Nav.Link>
            <Nav.Link href="#" className='text-white'>My List</Nav.Link>
          </Nav>

          <div id="kids">KIDS</div>

          <MovieSearch />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;