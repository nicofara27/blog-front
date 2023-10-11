import React, { useEffect, useState } from "react";
import ArticuloInd from "./components/ArticuloIndiv";
import ArticulosRec from "./components/ArticulosRec";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { traerArticulo } from "../../helpers/queries";

const PagArticulo = () => {
  const [articulo, setArticulo] = useState({});

  const { id } = useParams();

  useEffect(() => {
    traerArticulo(id).then((respuesta) => {
      if (respuesta.status === 200) {
        setArticulo(respuesta.data);
      } else {
        console.log(respuesta);
      }
    });
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
