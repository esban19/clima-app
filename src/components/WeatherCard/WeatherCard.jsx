import React from 'react';
import './WeatherCard.css';

const WeatherCard = () => {
  return (
    <section className="weather-card">
      <div className="weather-header">
        <div>
          <h2>Cancún, México</h2>
          <p>Condiciones agradables con algunas nubes</p>
        </div>
        <div className="temp-block">
          <h1>22°C</h1>
          <p>Parcialmente nublado</p>
          <small>Sensación térmica 24°C</small>
        </div>
      </div>
      <div className="weather-stats">
        <div><p>💧 Humedad</p><span>65%</span></div>
        <div><p>💨 Viento</p><span>12 km/h</span></div>
        <div><p>🌡 Presión</p><span>1013 hPa</span></div>
        <div><p>👁 Visibilidad</p><span>10 km</span></div>
      </div>
    </section>
  );
};

export default WeatherCard;