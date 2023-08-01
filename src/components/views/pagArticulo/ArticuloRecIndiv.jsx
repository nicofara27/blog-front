import React from "react";
import { Button } from "react-bootstrap";

const ArticuloRecInd = ({ articulo }) => {
  return (
    <article className="mb-4">
      <div>
        <img src={articulo.img} alt={articulo.titulo} className="w-100" />
      </div>
      <h6 className="fw-bolder">{articulo.titulo}</h6>
      <Button
        className="fs-7 py-0 px-1 w-100"
        variant="outline-primary"
        href={`/articulo/${articulo.id}`}
      >
        Ver mas
      </Button>
    </article>
  );
};

export default ArticuloRecInd;
