import React, { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import ArticuloRecInd from "./ArticuloRecIndiv";
import axios from "axios";
const URL = process.env.REACT_APP_API_ARTICULOS;

const ArticulosRec = ({ articulo, categoria }) => {
  const [articulos, setArticulos] = useState([]);
  useEffect(() => {
    // Funcion para traer los articulos recomendados que pertenezcan a la misma categoria del arituclo abierto
    const traerArticulos = async () => {
      try {
        const respuesta = await axios.get(URL + `/?categoria=${categoria}`);
        setArticulos(respuesta.data.reverse());
      } catch (err) {
        console.log(err);
      }
    };
    traerArticulos();
  }, [categoria]);

  return (
    <Col className="ms-md-5">
      <h4 className="fw-bolder">Otros articulos que te pueden interesar</h4>
      {/* Comprueba que el articulo recomendado no sea el mismo que el abierto y que no se muestren mas de 5 articulos */}
      {articulos.map((articuloRec, index) =>
        articuloRec.titulo !== articulo.titulo && index < 5 ? (
          <ArticuloRecInd
            key={articuloRec.id}
            articulo={articuloRec}
          ></ArticuloRecInd>
        ) : null
      )}
    </Col>
  );
};

export default ArticulosRec;
