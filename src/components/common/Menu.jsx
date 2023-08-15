import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { AuthContext } from "../context/authContext";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const { usuarioActivo, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  // Funcion para cerrar sesion
  const cerrarSesion = () => {
    logout();
    navigate("/");
  };

  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand id="logo" href="/">
          <img
            className="w-100"
            src="https://w7.pngwing.com/pngs/254/281/png-transparent-social-media-blogger-computer-icons-logo-blog-text-logo-social-media.png"
            alt=""
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto fs-5">
            <Nav.Link className="me-lg-4" href="/?categoria=arte">
              Arte
            </Nav.Link>
            <Nav.Link className="me-lg-4" href="/?categoria=musica">
              Musica
            </Nav.Link>
            <Nav.Link className="me-lg-4" href="/?categoria=cine">
              Cine
            </Nav.Link>
            <Nav.Link className="me-lg-4" href="/?categoria=comida">
              Comida
            </Nav.Link>
            <Nav.Link className="me-lg-4" href="/?categoria=ciencia">
              Ciencia
            </Nav.Link>
            <Nav.Link className="me-lg-4" href="/?categoria=tecnologia">
              Tecnologia
            </Nav.Link>
            {usuarioActivo ? (
              <div className="d-flex flex-column flex-lg-row">
                <Nav.Link disabled>{usuarioActivo}</Nav.Link>
                <Nav.Link
                  className="text-danger me-lg-4"
                  onClick={cerrarSesion}
                >
                  Logout
                </Nav.Link>
                <Button className="subir px-2 fs-5" href="/subir">
                  Subir
                </Button>
              </div>
            ) : (
              <Nav.Link
                className="me-lg-4 bg-primary rounded-pill px-3 text-light"
                href="/ingreso"
              >
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
