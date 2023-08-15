import React, { useContext, useState } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import axios from "axios";
import moment from "moment/moment";
import "moment/locale/es";
import { XCircle } from "react-bootstrap-icons";

import DOMPurify from "dompurify";
const URL = process.env.REACT_APP_API_ARTICULOS;

const ArticuloInd = ({ articulo }) => {
  const [mostrarModal, setMostrarModal] = useState(false);
  const cerrarModal = () => setMostrarModal(false);
  const abrirModal = () => setMostrarModal(true);

  const { usuarioActivo } = useContext(AuthContext);

  const navigate = useNavigate();

  // Funcion para eliminar articulo
  const borrarArticulo = async () => {
    try {
      await axios.delete(URL + `/${articulo.id}`, { withCredentials: true });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  // Contiene el modal que se abre al presionar el boton de borrar articulo
  const modal = (
    <Modal show={mostrarModal} onHide={cerrarModal}>
      <Modal.Body className="text-center pt-4">
        <XCircle className="text-danger  modal__icono"></XCircle>
        <h2 className="my-3">¿Estas seguro?</h2>
        <p className="fs-6 text-secondary">
          Una vez realizado este proceso no se puede deshacer.
        </p>
      </Modal.Body>
      <Modal.Footer className="pb-4">
        <Button variant="secondary" onClick={cerrarModal}>
          Cerrar
        </Button>
        <Button variant="danger" onClick={borrarArticulo}>
          Eliminar
        </Button>
      </Modal.Footer>
    </Modal>
  );

  // Componente condicional muestra los botones de editar y borrar articulo en caso de que el usuario activo sea el creador del arituclo
  const condicionalUsuario =
    usuarioActivo === articulo.nombreUsuario ? (
      <Row className="pagArt__user mt-2 align-items-center">
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
          <Link onClick={abrirModal} className="py-0 px-1 btn btn-danger">
            <i className="bi bi-trash"></i>
          </Link>
          {modal}
        </Col>
      </Row>
    ) : (
      <Row className="pagArt__user mt-2 align-items-center">
        <Col xs={3} lg={4}>
          <img
            src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
            alt=""
            className="w-100 h-100"
          />
        </Col>
        <Col xs={9} lg={8}>
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
      <div className="my-4 my-lg-5">
        <h1 className="fw-bolder">{articulo.titulo}</h1>
        {/* Convierte el texto que se sube con react-quill con etiquetas al formato HTMLDocument */}
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
