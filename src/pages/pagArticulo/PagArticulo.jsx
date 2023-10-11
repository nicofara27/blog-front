import React, { useEffect, useState } from "react";
import ArticuloInd from "./components/ArticuloIndiv";
import ArticulosRec from "./components/ArticulosRec";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import axios from "axios";
const URL = process.env.REACT_APP_API_ARTICULOS;

const PagArticulo = () => {
  const [articulo, setArticulo] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const traerArticulo = async () => {
      try {
        const respuesta = await axios.get(URL + `/${id}`);
        setArticulo(respuesta.data);
      } catch (err) {
        console.log(err);
      }
    };
    traerArticulo();
  }, []);

  return (
    <main>
      <Container className="d-flex flex-column flex-md-row justify-content-between ">
        <ArticuloInd articulo={articulo} />
        <ArticulosRec articulo={articulo} categoria={articulo.categoria} />
      </Container>
    </main>
  );
};

export default PagArticulo;
