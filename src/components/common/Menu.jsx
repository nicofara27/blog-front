import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';

const Menu = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Blog</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Arte</Nav.Link>
            <Nav.Link href="#link">Musica</Nav.Link>
            <Nav.Link href="#link">Cine</Nav.Link>
            <Nav.Link href="#link">Comida</Nav.Link>
            <Nav.Link href="#link">Ciencia</Nav.Link>
            <Nav.Link href="#link">Tecnologia</Nav.Link>
            <Nav.Link href="#link">Usuario</Nav.Link>
            <Nav.Link href="#link">Salir</Nav.Link>
            <Button href="#link" className='subir px-1'>Subir</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Menu;