import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div>
        <h4>☁️ Clima y Noticias</h4>
        <p>Tu fuente confiable para información meteorológica actualizada y noticias relevantes.</p>
      </div>
      <div>
        <h4>Servicios</h4>
        <ul>
          <li>Pronóstico del tiempo</li>
          <li>Alertas meteorológicas</li>
          <li>Noticias en tiempo real</li>
          <li>Radar meteorológico</li>
        </ul>
      </div>
      <div>
        <h4>Información</h4>
        <ul>
          <li>Acerca de nosotros</li>
          <li>Contacto</li>
          <li>Términos de uso</li>
          <li>Política de privacidad</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;