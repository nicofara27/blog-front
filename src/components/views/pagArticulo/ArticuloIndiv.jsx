import moment from "moment/moment";
import React from "react";
import { Button, Col, Row } from "react-bootstrap";

const ArticuloInd = ({ articulo }) => {
  return (
    <Col xs={8}>
      <div id="art__imgContainer">
        <img
          src={articulo.img}
          alt={articulo.titulo}
          className="art__img w-100 h-100"
        />
      </div>
      <Row className="w-50 mt-2 align-items-center">
        <Col>
          <img
            src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
            alt=""
            className="w-100 h-100"
          />
        </Col>
        <Col xs={6}>
          <h5 className="m-0">{articulo.nombreUsuario}</h5>
          <p className="fs-7 m-0">subido {moment(articulo.fecha).fromNow()}</p>
        </Col>
        <Col>
          <i class="bi bi-pencil btn btn-primary py-0 px-1 me-1"></i>
          <i class="bi bi-trash btn btn-danger py-0 px-1"></i>
        </Col>
      </Row>
      <div className="mt-5">
        <h1 className="fw-bolder">{articulo.titulo}</h1>
        <p className="mt-4 art__p">{articulo.texto}</p>
      </div>
    </Col>
  );
};

export default ArticuloInd;
