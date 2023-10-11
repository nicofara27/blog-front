import axios from "axios";

const URL = process.env.REACT_APP_API_USUARIOS;

// Funcion para registrar usuario
export const crearUsuario = async (datos) => {
  try {
    const respuesta = await axios.post(URL + "/registrar", datos);
    return respuesta;
  } catch (err) {
    return err;
  }
};
