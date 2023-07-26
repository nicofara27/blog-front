import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import { useForm } from "react-hook-form";

const PagIngreso = () => {
  const [error, setError] = useState();
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const iniciarSesion = async (datos) => {
    try {
      await login(datos);
      navigate("/");
    } catch (err) {
      setError(error.response.data);
    }
  };

  return (
    <main className="pagFormularios d-flex flex-column align-items-center justify-content-center">
      <h1 className="fw-semibold">Ingresá</h1>
      <Form
        className="pagFormularios__form py-4"
        onSubmit={handleSubmit(iniciarSesion)}
      >
        <Form.Group className="my-3 mx-4" controlId="formBasicUserName">
          <Form.Control
            type="text"
            placeholder="Nombre de usuario"
            className="formInput"
            {...register("nombreUsuario", {
              required: "Este campo no puede estar vacio.",
              minLength: {
                value: 4,
                message: "El nombre debe tener al menos 4 caracteres",
              },
              maxLength: {
                value: 30,
                message: "El nombre no debe tener mas de 30 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.nombreUsuario?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="my-3 mx-4" controlId="formBasicPassword">
          <Form.Control
            type="password"
            placeholder="Password"
            className="formInput"
            {...register("contrasenia", {
              required: "Este campo no puede estar vacio.",
              minLength: {
                value: 8,
                message: "Su contraseña debe tener al menos 8 caracteres",
              },
              maxLength: {
                value: 30,
                message:
                  "Su contraseña debe tener como 30 caracteres como maximo",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.contrasenia?.message}
          </Form.Text>
        </Form.Group>
        <div className="text-center mb-3">
          <Button variant="outline-secondary" type="submit">
            Ingresa
          </Button>
          {error && <p className="text-danger">{error}</p>}
        </div>
        <p className="text-center m-0">¿Todavia no tenes cuenta?</p>
        <div className="text-center">
          <Link to={"/registro"}>Registrate acá</Link>
        </div>
      </Form>
    </main>
  );
};

export default PagIngreso;
