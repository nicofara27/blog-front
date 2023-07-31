import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [usuarioActivo, setUsuarioActivo] = useState(
    JSON.parse(localStorage.getItem("usuarioActivo")) || null
  );

  const login = async (datos) => {
    const res = await axios.post("http://localhost:4000/usuarios/login", datos, {withCredentials: true, credentials: 'include'});
    setUsuarioActivo(res.data.nombreUsuario);
  };
  
  const logout = async (datos) => {
    await axios.post("http://localhost:4000/usuarios/logout", {} ,{withCredentials: true, credentials: 'include'});
    console.log(axios.post("http://localhost:4000/usuarios/logout"))
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
