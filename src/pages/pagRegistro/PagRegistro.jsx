import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Person } from "react-bootstrap-icons";
import { crearUsuario } from "../../helpers/queries";

const PagRegistro = () => {
  const [error, setError] = useState();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const registrar = (datos) => {
    crearUsuario(datos).then((respuesta) => {
      if (respuesta.status === 200) {
        navigate("/");
      } else {
        setError(respuesta.response.data);
      }
    });
  }


  return (
    <main className="pagFormularios d-flex flex-column align-items-center justify-content-center">
      <h1 className="fw-semibold">Registrarse</h1>
      <Form
        className="pagFormularios__form py-5"
        onSubmit={handleSubmit(registrar)}
        data-bs-theme="dark"
      >
        <div className="text-center">
          <Person className="pagFormularios__icono bg-white text-primary rounded-circle p-2" />
        </div>
        <Form.Group className="my-3 mx-4" controlId="formBasicName">
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
        <Form.Group className="my-3 mx-4" controlId="formBasicEmail">
          <Form.Control
            type="email"
            placeholder="Email"
            className="formInput"
            {...register("email", {
              required: "Este campo no puede estar vacio.",
              pattern: {
                value:
                  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,
                message: "Debe ingresar un formato valido",
              },
            })}
          />
          <Form.Text className="text-danger">{errors.email?.message}</Form.Text>
        </Form.Group>
        <Form.Group className="my-3 mx-4" controlId="formBasicPassword">
          <Form.Control
            type="password"
            placeholder="Contraseña"
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
            Registrarse
          </Button>
          {error && <p className="text-danger">{error}</p>}
        </div>
        <p className="text-center m-0">¿Ya tienes cuenta?</p>
        <div className="text-center">
          <Link to={"/ingreso"}>Ingresa acá</Link>
        </div>
      </Form>
    </main>
  );
};

export default PagRegistro;
