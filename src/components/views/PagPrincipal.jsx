import React, { useEffect, useState } from "react";
import Articulo from "./pagPrincipal/Articulo";
import { Container } from "react-bootstrap";
import axios from "axios";
import { useLocation } from "react-router-dom";
const URL = process.env.REACT_APP_API_ARTICULOS;

const PagPrincipal = () => {
  const [articulos, setArticulos] = useState([]);

  const categoria = useLocation().search;

  useEffect(() => {
    // Funcion para traer los articulos
    const traerArticulos = async () => {
      try {
        const respuesta = await axios.get(URL + `${categoria}`);
        setArticulos(respuesta.data.reverse());
      } catch (err) {
        console.log(err);
      }
    };
    traerArticulos();
  }, [categoria]);

  return (
    <main className="my-lg-4">
      <Container>
        {articulos.map((articulo) => (
          <Articulo key={articulo.id} articulo={articulo}></Articulo>
        ))}
      </Container>
    </main>
  );
};

export default PagPrincipal;
