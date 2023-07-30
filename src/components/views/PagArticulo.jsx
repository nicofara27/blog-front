import React, { useEffect, useState } from "react";
import ArticuloInd from "./pagArticulo/ArticuloIndiv";
import ArticulosRec from "./pagArticulo/ArticulosRec";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import axios from "axios";

const PagArticulo = () => {
  const [articulo, setArticulo] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const traerArticulos = async () => {
      try {
        const respuesta = await axios.get(
          `http://localhost:4000/articulos/${id}`
        );
        setArticulo(respuesta.data);
      } catch (err) {
        console.log(err);
      }
    };
    traerArticulos();
  }, []);

  return (
    <main>
      <Container className="d-flex justify-content-between">
        <ArticuloInd articulo={articulo}/>
        <ArticulosRec />
      </Container>
    </main>
  );
};

export default PagArticulo;