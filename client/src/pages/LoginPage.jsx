import React from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import "./stylePage/LoginPage.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signin, errors: signinErrors, isAuthenticated } = useAuth();
  const navigate = useNavigate();


  const onSubmit = handleSubmit((data) => {
    signin(data);
  });

  useEffect(() => {
    if(isAuthenticated) navigate("/tasks");
  }, [isAuthenticated]);

  return (
    <div className="form-container">
      <h1>Login</h1>
      <form onSubmit={onSubmit}>
        {signinErrors.map((error, i) => (
          <div className="error-login" key={i}>
            {error}
          </div>
        ))}

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

        <button type="submit">Login</button>
        <p>
          ¿No tenés cuenta? <Link to="/register">Registrate</Link>
        </p>
      </form>
    </div>
  );
}

export default LoginPage;
