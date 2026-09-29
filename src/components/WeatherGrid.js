import React from 'react';
import WeatherCard from './WeatherCard';
import './WeatherGrid.css';

function WeatherGrid({ weather }) {
  if (!weather) return null;

  const details = [
    { icon: '🌡️', label: 'Feels Like', value: weather.feelsLike, unit: '°C' },
    { icon: '💧', label: 'Humidity', value: weather.humidity, unit: '%' },
    { icon: '🌬️', label: 'Wind Speed', value: weather.windSpeed, unit: ' km/h' },
    { icon: '👁️', label: 'Visibility', value: weather.visibility, unit: ' km' },
    { icon: '🔽', label: 'Pressure', value: weather.pressure, unit: ' hPa' },
    { icon: '☁️', label: 'Cloud Cover', value: weather.clouds, unit: '%' },
  ];

  return (
    <section className="weather-grid" aria-label="Weather details">
      <h3 className="grid-title">Current Conditions</h3>
      <div className="grid-cards">
        {details.map((d) => (
          <WeatherCard key={d.label} {...d} />
        ))}
      </div>
    </section>
  );
}

export default WeatherGrid;
