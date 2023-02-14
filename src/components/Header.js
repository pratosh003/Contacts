import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <Navbar bg="light" sticky="top">
      <Container>
        <Navbar.Brand href="#home"><h2>Contact Manager</h2></Navbar.Brand>
      </Container>
    </Navbar>

  );
};

export default Header;