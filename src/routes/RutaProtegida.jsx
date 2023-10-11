import React from 'react';
import { Navigate } from 'react-router-dom';

const RutaProtegida = ({children}) => {
    const token = JSON.parse(localStorage.getItem("usuarioActivo")) || null;
    if(!token) {
        return <Navigate to="/ingreso"/>
    } else {
        return children;
    }
};

export default RutaProtegida;