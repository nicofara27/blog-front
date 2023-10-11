import axios from "axios";

const URL_USUARIOS = process.env.REACT_APP_API_USUARIOS;
const URL_ARTICULOS = process.env.REACT_APP_API_ARTICULOS;

// Funcion para registrar usuario
export const crearUsuario = async (datos) => {
  try {
    const respuesta = await axios.post(URL_USUARIOS + "/registrar", datos);
    return respuesta;
  } catch (err) {
    return err;
  }
};

export const editarArticulo = async ({
  id,
  titulo,
  texto,
  img,
  categoria,
  fecha,
}) => {
  await axios.put(
    URL_ARTICULOS + `/${id}`,
    {
      titulo,
      texto,
      img,
      categoria,
      fecha: fecha,
    },
    { withCredentials: true }
  );
};

export const agregarArticulo = async ({
  titulo,
  texto,
  img,
  categoria,
  fecha,
}) => {
  await axios.post(
    URL_ARTICULOS + "/subir",
    {
      titulo,
      texto,
      img,
      categoria,
      fecha,
    },
    { withCredentials: true }
  );
};

export const traerArticulos = async (categoria) => {
  try {
    const respuesta = await axios.get(URL_ARTICULOS + `${categoria}`);
    return respuesta;
  } catch (err) {
    return err;
  }
};

export const traerArticulo = async (id) => {
  try {
    const respuesta = await axios.get(URL_ARTICULOS + `/${id}`);
    return respuesta;
  } catch (err) {
    return err;
  }
};

export const borrarArticulo = async (id) => {
  try {
    const respuesta = await axios.delete(URL_ARTICULOS + `/${id}`, {
      withCredentials: true,
    });
    return respuesta;
  } catch (error) {
    return error;
  }
};
