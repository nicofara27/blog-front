import axios from "axios";
import moment from "moment/moment";
import React, { useState } from "react";
import { Button, Col, Form } from "react-bootstrap";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useLocation, useNavigate } from "react-router-dom";

const PagAgregarArt = () => {
  const art = useLocation().state;
  const [titulo, setTitulo] = useState(art ? art.titulo : "");
  const [texto, setTexto] = useState(art ? art.texto : "");
  const [img, setImg] = useState(art ? art.img : "");
  const [categoria, setCategoria] = useState(art ? art.categoria : "");

  const navigate = useNavigate();

  const subirArticulo = async (e) => {
    e.preventDefault();
    try {
      art
        ? await axios.put(
            `http://localhost:4000/articulos/${art.id}`,
            {
              titulo,
              texto,
              img,
              categoria,
              fecha: art.fecha,
            },
            { withCredentials: true }
          )
        : await axios.post(
            "http://localhost:4000/articulos/subir",
            {
              titulo,
              texto,
              img,
              categoria,
              fecha: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
            },
            { withCredentials: true }
          );
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main>
      <Form
        className="d-flex justify-content-between m-5"
        onSubmit={subirArticulo}
      >
        <Col xs={8}>
          <div className="formAgregar__titulo">
            <Form.Control
              type="text"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              placeholder="Titulo"
            />
          </div>
          <div className="formAgregar__quill">
            <ReactQuill
              className="formAgregar__quill"
              theme="snow"
              value={texto}
              onChange={setTexto}
            />
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
            <Form.Control
              type="text"
              placeholder="Imagen"
              value={img}
              onChange={(e) => setImg(e.target.value)}
            />
            <div className="d-flex justify-content-between mt-3">
              <Button disabled variant="outline-danger">
                Guardar como borrador
              </Button>
              <Button type="submit" variant="primary">
                {art ? "Editar" : "Subir"}
              </Button>
            </div>
          </div>
          <div className="border p-2 ms-3 mt-3 h-50">
            <h4 className="fw-semibold">Categoria</h4>
            <Form.Check
              label="Arte"
              name="categoria"
              type="radio"
              value={`arte`}
              onChange={(e) => setCategoria(e.target.value)}
              checked={categoria === "arte"}
            />
            <Form.Check
              label="Musica"
              name="categoria"
              type="radio"
              value={`musica`}
              onChange={(e) => setCategoria(e.target.value)}
              checked={categoria === "musica"}
            />
            <Form.Check
              label="Cine"
              name="categoria"
              type="radio"
              value={`cine`}
              onChange={(e) => setCategoria(e.target.value)}
              checked={categoria === "cine"}
            />
            <Form.Check
              label="Comida"
              name="categoria"
              type="radio"
              value={`comida`}
              onChange={(e) => setCategoria(e.target.value)}
              checked={categoria === "comida"}
            />
            <Form.Check
              label="Ciencia"
              name="categoria"
              type="radio"
              value={`ciencia`}
              onChange={(e) => setCategoria(e.target.value)}
              checked={categoria === "ciencia"}
            />
            <Form.Check
              label="Tecnologia"
              name="categoria"
              type="radio"
              value={`tecnologia`}
              onChange={(e) => setCategoria(e.target.value)}
              checked={categoria === "tecnologia"}
            />
          </div>
        </Col>
      </Form>
    </main>
  );
};

export default PagAgregarArt;
