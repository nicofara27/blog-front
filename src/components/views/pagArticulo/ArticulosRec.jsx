import React, { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import ArticuloRecInd from "./ArticuloRecIndiv";
import axios from "axios";
const URL = process.env.REACT_APP_API_ARTICULOS;

const ArticulosRec = ({ categoria }) => {
  const [articulos, setArticulos] = useState([]);
  useEffect(() => {
    const traerArticulos = async () => {
      try {
        const respuesta = await axios.get(URL + `/?categoria=${categoria}`);
        setArticulos(respuesta.data);
      } catch (err) {
        console.log(err);
      }
    };
    traerArticulos();
  }, [categoria]);

  return (
    <Col className="ms-md-5">
      <h4 className="fw-bolder">Otros articulos que te pueden interesar</h4>
      {articulos.map((articulo) => (
        <ArticuloRecInd key={articulo.id} articulo={articulo}></ArticuloRecInd>
      ))}
    </Col>
  );
};

export default ArticulosRec;
