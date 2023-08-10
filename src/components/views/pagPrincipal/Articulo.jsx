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
    <Row className="articulo mb-4">
      <Col xs={12} md={7} className="d-flex flex-column justify-content-between">
        <h2 className="fw-bolder">{articulo.titulo}</h2>
        {convertirTexto(articulo.texto)}
        <Button href={`/articulo/${articulo.id}`} variant="outline-primary">
          Ver mas
        </Button>
      </Col>
      <Col xs={12} md={5}>
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
