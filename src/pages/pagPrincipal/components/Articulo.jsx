import React from "react";
import { Button, Col, Row } from "react-bootstrap";

// Funcion que convierte el texto que se sube con react-quill con etiquetas al formato HTMLDocument
const convertirTexto = (texto) => {
  const textoConvertido = new DOMParser().parseFromString(texto, "text/html");
  let textoNuevo = textoConvertido.body.textContent;
  // En el caso de que el texto sea muy largo lo recorta
  if (textoNuevo.length > 300) {
    textoNuevo = textoNuevo.slice(0, 300) + "...";
  }
  return textoNuevo;
};

const Articulo = ({ articulo }) => {
  return (
    <Row className="articulo mb-5">
      <Col
        xs={12}
        md={6}
        className="d-flex flex-column justify-content-between"
      >
        <h2 className="fw-bolder">{articulo.titulo}</h2>
        {convertirTexto(articulo.texto)}
        <Button href={`/articulo/${articulo.id}`} variant="outline-primary">
          Ver mas
        </Button>
      </Col>
      <Col xs={12} md={6}>
        <div className="articulo__imgContainer">
          <img
            className="articulo__img"
            src={articulo.img}
            alt={articulo.titulo}
          />
        </div>
      </Col>
    </Row>
  );
};

export default Articulo;
