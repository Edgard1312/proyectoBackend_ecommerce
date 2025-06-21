import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from "../context/AuthContext"

function NavBar() {
  const { isAuthenticated, logout, user } = useAuth();
  return (
    <header>
      <nav>
        <Link to="/">
          <h1>Logo</h1>
        </Link>

        <ul>
          {isAuthenticated ? (
            <>
              <li>
                Bienvenido {user.username}
              </li>
              <li>
                <Link to="/products">Agregar Productos</Link>
              </li>
              <li>
                <Link to="/" onClick={() =>{logout();}}>Cerrar sesion</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Registro</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}


export default NavBar