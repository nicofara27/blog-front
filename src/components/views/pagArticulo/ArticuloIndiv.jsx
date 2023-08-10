import React, { useContext } from "react";
import { Col, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import axios from "axios";
import moment from "moment/moment";
import "moment/locale/es";
import DOMPurify from "dompurify";
const URL = process.env.REACT_APP_API_ARTICULOS;

const ArticuloInd = ({ articulo }) => {
  const { usuarioActivo } = useContext(AuthContext);
  const navigate = useNavigate();

  const borrarArticulo = async () => {
    try {
      await axios.delete(URL + `/${articulo.id}`, { withCredentials: true });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  const condicionalUsuario =
    usuarioActivo === articulo.nombreUsuario ? (
      <Row className="w-50 mt-2 align-items-center">
        <Col>
          <img
            src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairNotTooLong&accessoriesType=Blank&hairColor=Black&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Brown"
            alt=""
            className="w-100 h-100"
          />
        </Col>
        <Col xs={6}>
          <h5 className="m-0">{articulo.nombreUsuario}</h5>
          <p className="fs-7 m-0">subido {moment(articulo.fecha).fromNow()}</p>
        </Col>
        <Col>
          <Link
            className="py-0 px-1 me-1 btn btn-primary"
            to={`/editar/${articulo.id}`}
            state={articulo}
          >
            <i className="bi bi-pencil "></i>
          </Link>
          <Link onClick={borrarArticulo} className="py-0 px-1 btn btn-danger">
            <i className="bi bi-trash"></i>
          </Link>
        </Col>
      </Row>
    ) : (
      <Row className="w-50 mt-2 align-items-center">
        <Col xs={3}>
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
      </Row>
    );

  return (
    <Col xs={12} md={8}>
      <div id="art__imgContainer">
        <img
          src={articulo.img}
          alt={articulo.titulo}
          className="art__img w-100 h-100"
        />
      </div>
      {condicionalUsuario}
      <div className="mt-5">
        <h1 className="fw-bolder">{articulo.titulo}</h1>

        <p
          className="mt-4 art__p"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(articulo.texto),
          }}
        ></p>
      </div>
    </Col>
  );
};

export default ArticuloInd;
