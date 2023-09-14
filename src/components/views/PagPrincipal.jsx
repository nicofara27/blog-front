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
    <main className="asd">
      <Container>
        {categoria ? (
          <h1 className="pagPrincipal__titulo">{categoria.slice(11)}</h1>
        ) : null}
        {articulos.length > 0 ? (
          articulos.map((articulo) => (
            <Articulo key={articulo.id} articulo={articulo}></Articulo>
          ))
        ) : (
          <h1 className="pagPrincipal__texto">
            Por el momento no hay articulos que pertenezcan a esta categoria
          </h1>
        )}
      </Container>
    </main>
  );
};

export default PagPrincipal;
