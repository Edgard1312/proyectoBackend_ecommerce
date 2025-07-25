import React from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";


function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signup, isAuthenticated, errors: registerErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/tasks");
  }, [isAuthenticated, navigate]);

  const onSubmit = handleSubmit(async (values) => {
    signup(values);
  });

  return (
    <>
      <div className="form-container">
        

        <form onSubmit={onSubmit}>
          <h1>Formulario de registro</h1>
          
          {registerErrors.map((error, i) => (
            <div className="bg-red-500 p-2" key={i}>
              {error}
            </div>
          ))}

          <input
            type="text"
            placeholder="Nombre de usuario"
            {...register("username", { required: true })}
          />
          {errors.username && <span>El nombre de usuario es requerido</span>}

          <input
            type="email"
            placeholder="E-mail"
            {...register("email", { required: true })}
          />
          {errors.email && <span>El email es requerido</span>}

          <input
            type="password"
            placeholder="Contraseña"
            {...register("password", { required: true })}
          />
          {errors.password && <span>La contraseña es requerida</span>}

          <button type="submit">Registrate</button>
          <p>
            ¿Ya tenés una cuenta? <Link to="/login">Logeate</Link>
          </p>
        </form>
      </div>
    </>
  );
}

export default RegisterPage;
