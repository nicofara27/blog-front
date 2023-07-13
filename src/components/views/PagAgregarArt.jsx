import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const PagAgregarArt = () => {
  const [value, setValue] = useState("");
  return (
    <main>
      <Form className="d-flex justify-content-between m-5">
        <Col xs={8}>
          <div className="formAgregar__titulo">
            <Form.Control type="text" placeholder="Titulo" />
          </div>
          <div className="formAgregar__quill">
            <ReactQuill className="formAgregar__quill" theme="snow" value={value} onChange={setValue} />
          </div>
        </Col>
        <Col xs={4}>
          <div className="border p-2 ms-3 h-50">
            <h4 className="fw-semibold">Publicar</h4>
            <p className="m-0">
              <strong>Estatus:</strong> Borrador
            </p>
            <p className="mb-2">
              <strong>Visibilidad:</strong> Publico
            </p>
            <Form.Control type="text" placeholder="Imagen" />
            <div className="d-flex justify-content-between mt-3">
              <Button disabled variant="outline-danger">
                Guardar como borrador
              </Button>
              <Button type="submit" variant="primary">
                Subir
              </Button>
            </div>
          </div>
          <div className="border p-2 ms-3 mt-3 h-50">
            <h4 className="fw-semibold">Categoria</h4>
            <Form.Check
              label="Arte"
              name="categoria"
              type="radio"
              id={`arte`}
            />
            <Form.Check
              label="Musica"
              name="categoria"
              type="radio"
              id={`musica`}
            />
            <Form.Check
              label="Cine"
              name="categoria"
              type="radio"
              id={`cine`}
            />
            <Form.Check
              label="Comida"
              name="categoria"
              type="radio"
              id={`comida`}
            />
            <Form.Check
              label="Ciencia"
              name="categoria"
              type="radio"
              id={`ciencia`}
            />
            <Form.Check
              label="Tecnologia"
              name="categoria"
              type="radio"
              id={`tecnologia`}
            />
          </div>
        </Col>
      </Form>
    </main>
  );
};

export default PagAgregarArt;
