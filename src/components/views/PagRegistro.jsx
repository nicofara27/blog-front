import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const PagRegistro = () => {
  return (
    <main className="pagFormularios d-flex flex-column align-items-center justify-content-center">
      <h1 className="fw-semibold">Registrarse</h1>
      <Form className="pagFormularios__form py-4">
        <Form.Group className="my-3 mx-4" controlId="formBasicName">
          <Form.Control
            type="text"
            placeholder="Nombre de usuario"
            className="formInput"
          />
        </Form.Group>

        <Form.Group className="my-3 mx-4" controlId="formBasicEmail">
          <Form.Control
            type="email"
            placeholder="Email"
            className="formInput"
          />
        </Form.Group>

        <Form.Group className="my-3 mx-4" controlId="formBasicPassword">
          <Form.Control
            type="password"
            placeholder="Contraseña"
            className="formInput"
          />
        </Form.Group>
        <div className="text-center mb-3">
          <Button variant="outline-secondary" type="submit">
            Registrarse
          </Button>
        </div>
        <p className="text-center m-0">¿Ya tienes cuenta?</p>
        <div className="text-center">
          <Link to={"/ingreso"}>Ingresa acá</Link>
        </div>
      </Form>
    </main>
  );
};

export default PagRegistro;
