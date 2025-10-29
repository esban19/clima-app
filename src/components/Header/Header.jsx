import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="topbar">
      <div className="logo">☁️ Clima y Noticias</div>
      <div className="search-bar">
        <input type="text" placeholder="Buscar ciudad o noticia..." />
      </div>
      <button className="location-btn">📍 Mi ubicación</button>
    </header>
  );
};

export default Header;