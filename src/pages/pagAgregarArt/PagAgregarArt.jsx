import axios from "axios";
import moment from "moment/moment";
import React, { useState } from "react";
import { Button, Col, Container, Form } from "react-bootstrap";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useLocation, useNavigate } from "react-router-dom";
const URL = process.env.REACT_APP_API_ARTICULOS;

const PagAgregarArt = () => {
  const artParaEditar = useLocation().state;
  const [titulo, setTitulo] = useState(
    artParaEditar ? artParaEditar.titulo : ""
  );
  const [texto, setTexto] = useState(artParaEditar ? artParaEditar.texto : "");
  const [img, setImg] = useState(artParaEditar ? artParaEditar.img : "");
  const [categoria, setCategoria] = useState(
    artParaEditar ? artParaEditar.categoria : ""
  );
  const [error, setError] = useState(false);

  // Contiene los datos de un articulo en el caso de que se lo quiera editar

  const navigate = useNavigate();

  // Funcion para subir o editar un articulo. Primero comprueba que los casilleros no esten vacios
  const subirArticulo = async (e) => {
    e.preventDefault();
    if (titulo === "" || texto === "" || img === "" || categoria === "") {
      setError(true);
    } else {
      try {
        artParaEditar
          ? await axios.put(
              URL + `/${artParaEditar.id}`,
              {
                titulo,
                texto,
                img,
                categoria,
                fecha: artParaEditar.fecha,
              },
              { withCredentials: true }
            )
          : await axios.post(
              URL + "/subir",
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
    }
  };

  return (
    <main className="my-5">
      <Container>
        {/* Alert que aparece en el caso de que algun campo este vacio */}
        <Form
          className="d-flex flex-column flex-lg-row justify-content-between"
          onSubmit={subirArticulo}
        >
          <Col
            xs={12}
            lg={8}
            className="d-flex flex-column justify-content-between"
          >
            <div className="formAgregar__titulo mb-3 mb-lg-0">
              <Form.Control
                type="text"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
                placeholder="Titulo"
              />
            </div>
            <div className="formAgregar__quill ">
              <ReactQuill
                className=""
                theme="snow"
                value={texto}
                onChange={setTexto}
              />
            </div>
          </Col>
          <Col
            xs={12}
            lg={4}
            className="d-flex flex-column justify-content-center"
          >
            <div className="h-50 order-1 order-lg-0 p-2 ms-lg-3 mt-3 mt-lg-0 mb-lg-3 border">
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
              <Button className="w-100 mt-3" type="submit" variant="primary">
                {artParaEditar ? "Editar" : "Subir"}
              </Button>

              {error ? (
                <p className="text-danger my-2 text-center fw-semibold">
                  No puede haber campos vacios
                </p>
              ) : (
                <br className="my-1"></br>
              )}
            </div>
            <div className="h-50 border p-2 ms-lg-3 mt-3 mt-lg-0">
              <h4 className="fw-semibold">Categoria</h4>
              <Form.Check
                id="checkArte"
                label="Arte"
                name="categoria"
                type="radio"
                value={`arte`}
                onChange={(e) => setCategoria(e.target.value)}
                checked={categoria === "arte"}
              />
              <Form.Check
                id="checkMusica"
                label="Musica"
                name="categoria"
                type="radio"
                value={`musica`}
                onChange={(e) => setCategoria(e.target.value)}
                checked={categoria === "musica"}
              />
              <Form.Check
                id="checkCine"
                label="Cine"
                name="categoria"
                type="radio"
                value={`cine`}
                onChange={(e) => setCategoria(e.target.value)}
                checked={categoria === "cine"}
              />
              <Form.Check
                id="checkComida"
                label="Comida"
                name="categoria"
                type="radio"
                value={`comida`}
                onChange={(e) => setCategoria(e.target.value)}
                checked={categoria === "comida"}
              />
              <Form.Check
                id="checkCiencia"
                label="Ciencia"
                name="categoria"
                type="radio"
                value={`ciencia`}
                onChange={(e) => setCategoria(e.target.value)}
                checked={categoria === "ciencia"}
              />
              <Form.Check
                id="checkTecnologia"
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
      </Container>
    </main>
  );
};

export default PagAgregarArt;
