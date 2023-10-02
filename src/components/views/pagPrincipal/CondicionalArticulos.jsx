import React, { useEffect, useState } from "react";
import Articulo from "./Articulo";
import { Container, Spinner } from "react-bootstrap";
import axios from "axios";
import { useLocation } from "react-router";
const URL = process.env.REACT_APP_API_ARTICULOS;

const CondicionalArticulos = () => {
  const [articulos, setArticulos] = useState([]);
  const [loading, setLoading] = useState(true);

  const categoria = useLocation().search;

  const condicionalCargando = loading ? (
    <Container>
      <div className="pagPrincipal__cargando">
        <h1>Cargando Articulos</h1>
        <Spinner />
      </div>
    </Container>
  ) : articulos.length > 0 ? (
    articulos.map((articulo) => (
      <Articulo key={articulo.id} articulo={articulo}></Articulo>
    ))
  ) : (
    <h1 className="pagPrincipal__texto">
      Por el momento no hay articulos que pertenezcan a esta categoria
    </h1>
  );

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
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <Container className="algin-self-start">
      {categoria && !loading ? (
        <h1 className="pagPrincipal__titulo">{categoria.slice(11)}</h1>
      ) : null}
      {condicionalCargando}
    </Container>
  );
};

export default CondicionalArticulos;
