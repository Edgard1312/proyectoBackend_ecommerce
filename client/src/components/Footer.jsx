import React from 'react'
import './styleComponents/Footer.css'

function Footer() {
  return (
        <footer class="footer">
        <div class="footer-content">
            <div class="footer-section about">
                <h3>Sobre Nosotros</h3>
                <p>Somos una empresa dedicada a... [Breve descripción de tu empresa/sitio].</p>
            </div>
            <div class="footer-section social">
                <h3>Seguinos</h3>
                <ul>
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">Twitter</a></li>
                    <li><a href="#">Instagram</a></li>
                    <li><a href="#">LinkedIn</a></li>
                </ul>
            </div>
            <div class="footer-section contact-info">
                <h3>Contacto</h3>
                <p>Email: info@tudominio.com</p>
                <p>Teléfono: +54 11 1234 5678</p>
                <p>Dirección: Calle Ficticia 123, Buenos Aires, Argentina</p>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2025 Tu Empresa/Sitio Web. Todos los derechos reservados.</p>
            <p><a href="#">Política de Privacidad</a> | <a href="#">Términos y Condiciones</a></p>
        </div>
    </footer>
  )
}

export default Footer