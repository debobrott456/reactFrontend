import React from 'react';
import './WeatherCard.css';

// Reusable card for a single weather detail
function WeatherCard({ icon, label, value, unit }) {
  return (
    <div className="weather-card" role="article" aria-label={`${label}: ${value}${unit}`}>
      <span className="card-icon" aria-hidden="true">{icon}</span>
      <span className="card-value">{value}<span className="card-unit">{unit}</span></span>
      <span className="card-label">{label}</span>
    </div>
  );
}

export default WeatherCard;
