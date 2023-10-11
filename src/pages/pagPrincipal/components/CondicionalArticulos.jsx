import React, { useEffect, useState } from "react";
import Articulo from "./Articulo";
import { Container, Spinner } from "react-bootstrap";
import { useLocation } from "react-router";
import { traerArticulos } from "../../../helpers/queries";

const CondicionalArticulos = () => {
  const [articulos, setArticulos] = useState(null);

  const categoria = useLocation().search;

  useEffect(() => {
    traerArticulos(categoria).then((respuesta) => {
      if(respuesta.status === 200){
        setArticulos(respuesta.data.reverse());
      } else {
        console.log(respuesta)
      }
    });
  }, [categoria]);

  const condicionalCargando =
    articulos === null ? (
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

  return (
    <Container className="algin-self-start">
      {categoria ? (
        <h1 className="pagPrincipal__titulo">{categoria.slice(11)}</h1>
      ) : null}
      {condicionalCargando}
    </Container>
  );
};

export default CondicionalArticulos;
