import React, { useEffect, useState } from "react";
import Articulo from "./pagPrincipal/Articulo";
import { Container } from "react-bootstrap";
import axios from "axios";

const PagPrincipal = () => {
  const [articulos, setArticulos] = useState([]);

  useEffect(() => {
    const traerArticulos = async () => {
      try {
        const respuesta = await axios.get("http://localhost:4000/articulos");
        setArticulos(respuesta.data);
      } catch (err) {
        console.log(err);
      }
    };
    traerArticulos();
  }, []);

  return (
    <main>
      <Container>
        {articulos.map((articulo) => (
          <Articulo articulo={articulo}></Articulo>
        ))}
      </Container>
    </main>
  );
};

export default PagPrincipal;
