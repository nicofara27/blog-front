import React from "react";
import { Button, Col, Row } from "react-bootstrap";

const Articulo = ({ articulo }) => {
  const convertirTexto = (texto) => {
    const textoConvertido = new DOMParser().parseFromString(texto, "text/html");
    let textoNuevo = textoConvertido.body.textContent;
    if (textoNuevo.length > 300) {
      textoNuevo = textoNuevo.slice(0, 300) + "...";
    }
    return textoNuevo;
  };

  return (
    <Row className="articulo">
      <Col className="d-flex flex-column justify-content-between">
        <h2 className="fw-bolder">{articulo.titulo}</h2>
        <p>{convertirTexto(articulo.texto)}</p>
        <Button href={`/articulo/${articulo.id}`} variant="outline-primary">
          Ver mas
        </Button>
      </Col>
      <Col>
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
