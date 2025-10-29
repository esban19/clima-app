import React from 'react';
import './ForecastDays.css';

const ForecastDays = () => {
  const days = [
    { day: 'Hoy', condition: 'Parcialmente nublado', temp: '25°/15°' },
    { day: 'Mañana', condition: 'Lluvia', temp: '20°/12°' },
    { day: 'Jueves', condition: 'Soleado', temp: '26°/16°' },
    { day: 'Viernes', condition: 'Nublado', temp: '23°/14°' },
    { day: 'Sábado', condition: 'Lluvia ligera', temp: '21°/13°' }
  ];

  return (
    <section className="forecast-days">
      <h3>Pronóstico de 5 días</h3>
      <ul>
        {days.map((day, index) => (
          <li key={index}>
            <span>{day.day}</span>
            <p>{day.condition}</p>
            <b>{day.temp}</b>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ForecastDays;