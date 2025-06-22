import React from "react";
import dragonBall from "../assets/slider_dragon.png";
import quintiDiosas from "../assets/slider_quinti.png"
import one from "../assets/slider_one.png"

function HomePage() {
  return (
    <section class="introduccion">
      <div class="bienvenido">
        <h2>Bienvenidos a MANGA 100%</h2>
        <p>¡Acá vas a poder encontrar todo lo estás buscando!</p>
      </div>

      {/* <!-- slides -->  */}

      <div class="slider">
        <button class="nav-button" id="prevBtn">
          &lt;
        </button>

        <div class="slides">
          <div class="slide">
            <img src={dragonBall} alt="foto" />
            <div class="text">
              <h1>Tu tienda preferida</h1>
              <p>Siempre cerca</p>
              <a href="locales.html" class="button">
                Encontranos
              </a>
            </div>
          </div>

          <div class="slide">
            <img src={quintiDiosas} alt="" />
            <div class="text">
              <h1>Desde 2010</h1>
              <p>Brindando los mejores mangas</p>
              <a href="sobre-nosotros.html" class="button">
                Conocenos
              </a>
            </div>
          </div>

          <div class="slide">
            <img src={one} alt="" />
            <div class="text">
              <h1>Encontrá nuestras novedades</h1>
              <p>A los mejores precios del mercado</p>
              <a href="novedades.html" class="button">
                Descubrilos
              </a>
            </div>
          </div>
        </div>

        <button class="nav-button" id="nextBtn">
          &gt;
        </button>
      </div>
    </section>
  );
}

export default HomePage;
