import axios from "axios";
import { createContext, useEffect, useState } from "react";
const URL = process.env.REACT_APP_API_USUARIOS;

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [usuarioActivo, setUsuarioActivo] = useState(
    JSON.parse(localStorage.getItem("usuarioActivo")) || null
  );

  const login = async (datos) => {
    const res = await axios.post(URL + "/login", datos, {
      withCredentials: true,
      credentials: "include",
    });
    setUsuarioActivo(res.data.nombreUsuario);
  };

  const logout = async (datos) => {
    await axios.post(
      URL + "/logout",
      {},
      { withCredentials: true, credentials: "include" }
    );
    setUsuarioActivo(null);
  };

  useEffect(() => {
    localStorage.setItem("usuarioActivo", JSON.stringify(usuarioActivo));
  }, [usuarioActivo]);
  return (
    <AuthContext.Provider value={{ usuarioActivo, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
