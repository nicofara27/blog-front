const URL = process.env.REACT_APP_API_USER

export const crearUsuario = async (usuario) => {
    try {
        const respuesta = await fetch(URL+"registrar", {
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(usuario)
        });
        console.log(respuesta)
        return respuesta;
    } catch (error) {
        console.log(error);
        return false;
    }
}