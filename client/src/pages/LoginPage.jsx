import React from 'react'
import {useForm} from "react-hook-form"
import { useAuth } from '../context/authContext';
import './stylePage/LoginPage.css'


function LoginPage() {
  const {register, handleSubmit, formState:{errors},} = useForm();

  const {signin, errors: signinErrors} = useAuth();

  const onSubmit = handleSubmit((data) =>{
    signin(data)
  })


  return (
    <div className= "form-container">
      {signinErrors.map((error, i) => (
          <div className="bg-red-500 p-2" key={i}>
            {error}
          </div>
        ))} 

      <h1>Login</h1>
      <form onSubmit={onSubmit}>
          
          <input type="email" placeholder='E-mail' {...register("email", { required: true })} />
          {errors.email && (<span>El email es requerido</span>)}

          <input
            type="password" placeholder='Contraseña'
            {...register("password", { required: true })}
          />
          {errors.password && (<span>La contraseña es requerida</span>)}
          
          <button type="submit">Register</button>
        </form>
    </div>
  )
}

export default LoginPage
