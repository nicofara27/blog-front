import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { AuthContext } from "../context/authContext";

const Menu = () => {
  const { usuarioActivo, logout } = useContext(AuthContext);

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Blog</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/?categoria=arte">Arte</Nav.Link>
            <Nav.Link href="/?categoria=musica">Musica</Nav.Link>
            <Nav.Link href="/?categoria=cine">Cine</Nav.Link>
            <Nav.Link href="/?categoria=comida">Comida</Nav.Link>
            <Nav.Link href="/?categoria=ciencia">Ciencia</Nav.Link>
            <Nav.Link href="/?categoria=tecnologia">Tecnologia</Nav.Link>
            {usuarioActivo ? (
              <div className="d-flex">
                <Nav.Link>{usuarioActivo}</Nav.Link>
                <Nav.Link onClick={logout}>Logout</Nav.Link>
              </div>
            ) : (
              <Nav.Link href="/ingreso">Login</Nav.Link>
            )}
            <Button className="subir px-1">Subir</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
