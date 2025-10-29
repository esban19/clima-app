import React from 'react';
import Header from './components/Header/Header';
import WeatherCard from './components/WeatherCard/WeatherCard';
import NewsCard from './components/NewsCard/NewsCard';
import ForecastHours from './components/ForecastHours/ForecastHours';
import ForecastDays from './components/ForecastDays/ForecastDays';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <div className="main-grid">
          <WeatherCard />
          <NewsCard />
        </div>
        <div className="pronosticos">
          <ForecastHours />
          <ForecastDays />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;