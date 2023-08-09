import React, { useEffect, useState } from "react";
import Articulo from "./pagPrincipal/Articulo";
import { Container } from "react-bootstrap";
import axios from "axios";
import { useLocation } from "react-router-dom";

const PagPrincipal = () => {
  const [articulos, setArticulos] = useState([]);

  const categoria = useLocation().search;

  useEffect(() => {
    const traerArticulos = async () => {
      try {
        const respuesta = await axios.get(`http://localhost:4000/articulos${categoria}`);
        setArticulos(respuesta.data);
      } catch (err) {
        console.log(err);
      }
    };
    traerArticulos();
  }, [categoria]);

  return (
    <main className="my-4">
      <Container>
        {articulos.map((articulo) => (
          <Articulo key={articulo.id} articulo={articulo}></Articulo>
        ))}
      </Container>
    </main>
  );
};

export default PagPrincipal;
