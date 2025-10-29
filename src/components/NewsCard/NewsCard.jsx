import React from 'react';
import './NewsCard.css';

const NewsCard = () => {
  const news = [
    {
      id: 1,
      type: 'breaking',
      title: 'Alerta meteorológica: Se esperan fuertes lluvias en la región central',
      category: 'Meteorología',
      time: 'Hace 2 horas'
    },
    {
      id: 2,
      type: 'normal',
      title: 'Nueva tecnología mejora precisión de pronósticos climáticos',
      category: 'Tecnología',
      time: 'Hace 4 horas'
    },
    {
      id: 3,
      type: 'normal',
      title: 'Cambio climático afecta patrones de migración animal',
      category: 'Medio Ambiente',
      time: 'Hace 6 horas'
    }
  ];

  return (
    <aside className="news-card">
      <h3>Noticias Destacadas</h3>
      {news.map(item => (
        <article 
          key={item.id} 
          className={item.type === 'breaking' ? 'breaking-news' : ''}
        >
          {item.type === 'breaking' && (
            <span className="breaking-label">ÚLTIMA HORA</span>
          )}
          <p>{item.title}</p>
          <small>{item.category} • {item.time}</small>
        </article>
      ))}
    </aside>
  );
};

export default NewsCard;