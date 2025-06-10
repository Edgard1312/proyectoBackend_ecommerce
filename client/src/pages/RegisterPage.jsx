import React from 'react'
import {useForm} from "react-hook-form"
import './stylePage/RegisterPage.css'
import { useAuth } from '../context/AuthContext';


function RegisterPage() {
  const { register, handleSubmit } = useForm();
  const {signup, user} = useAuth();

  console.log(user)

  const onSubmit = handleSubmit(async (values) => {
    signup(values);
  });
  

  return (
    <>
      <div className="form-container"> 
        <h1>Formulario de registro</h1>

        <form onSubmit={onSubmit}>
          <input type="text" placeholder='Nombre de usuario' {...register("username", { required: true })} />
          <input type="email" placeholder='E-mail' {...register("email", { required: true })} />
          <input
            type="password" placeholder='Contraseña'
            {...register("password", { required: true })}
          />
          <button type="submit">Register</button>
        </form>
      </div>
    </>
  );
}

export default RegisterPage