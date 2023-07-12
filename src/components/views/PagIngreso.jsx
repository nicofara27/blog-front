import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const PagIngreso = () => {
  return (
    <main className="pagFormularios d-flex flex-column align-items-center justify-content-center">
      <h1 className="fw-semibold">Ingresá</h1>
      <Form className="pagFormularios__form py-4">
        <Form.Group className="my-3 mx-4" controlId="formBasicEmail">
          <Form.Control
            type="email"
            placeholder="Enter email"
            className="formInput"
          />
        </Form.Group>

        <Form.Group className="my-3 mx-4" controlId="formBasicPassword">
          <Form.Control
            type="password"
            placeholder="Password"
            className="formInput"
          />
        </Form.Group>
        <div className="text-center mb-3">
          <Button variant="outline-secondary" type="submit">
            Ingresa
          </Button>
        </div>
        <p className="text-center m-0">¿Todavia no tenes cuenta?</p>
        <div className="text-center">
          <Link to={"/registro"}>Registrate acá</Link>
        </div>
      </Form>
    </main>
  );
};

export default PagIngreso;
