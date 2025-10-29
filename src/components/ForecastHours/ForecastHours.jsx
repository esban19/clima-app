import React from 'react';
import './ForecastHours.css';

const ForecastHours = () => {
  const hours = [
    { time: '14:00', icon: '⛅', temp: '22°', condition: 'Parcialmente nublado' },
    { time: '15:00', icon: '☀️', temp: '24°', condition: 'Soleado' },
    { time: '16:00', icon: '☀️', temp: '25°', condition: 'Soleado' },
    { time: '17:00', icon: '☁️', temp: '23°', condition: 'Nublado' },
    { time: '18:00', icon: '🌧', temp: '21°', condition: 'Lluvia ligera' },
    { time: '19:00', icon: '🌧', temp: '19°', condition: 'Lluvia' }
  ];

  return (
    <section className="forecast-hours">
      <h3>Pronóstico por horas</h3>
      <div className="hours-scroll">
        {hours.map((hour, index) => (
          <div key={index}>
            <p>{hour.time}</p>
            <span>{hour.icon}</span>
            <h4>{hour.temp}</h4>
            <small>{hour.condition}</small>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ForecastHours;