import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import WeatherGrid from './components/WeatherGrid';
import ForecastSection from './components/ForecastSection';
import Footer from './components/Footer';
import { fetchWeather } from './services/weatherService';
import './App.css';

function App() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (city) => {
    setLoading(true);
    setError(null);
    setWeather(null);
    setForecast(null);
    try {
      const data = await fetchWeather(city);
      const { forecast: fc, ...current } = data;
      setWeather(current);
      setForecast(fc);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app" id="top">
      <Navbar onSearch={handleSearch} />
      <main>
        <Banner weather={weather} loading={loading} error={error} />
        <WeatherGrid weather={weather} />
        <ForecastSection forecast={forecast} id="forecast" />
      </main>
      <Footer />
    </div>
  );
}

export default App;
