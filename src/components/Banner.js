import React from 'react';
import './Banner.css';

function Banner({ weather, loading, error }) {
  if (loading) {
    return (
      <div className="banner banner-loading" role="status" aria-live="polite">
        <div className="spinner" aria-label="Loading weather data"></div>
        <p>Fetching weather...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="banner banner-error" role="alert">
        <span>⚠️</span>
        <p>{error}</p>
      </div>
    );
  }

  if (!weather) {
    return (
      <div className="banner banner-default">
        <h1>Know your weather, anywhere.</h1>
        <p>Search for a city above to get the latest conditions.</p>
      </div>
    );
  }

  return (
    <div className="banner banner-active">
      <div className="banner-content">
        <div className="banner-left">
          <h2 className="banner-city">{weather.city}, {weather.country}</h2>
          <p className="banner-date">{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
          <p className="banner-description">{weather.description}</p>
        </div>
        <div className="banner-right">
          <span className="banner-icon" aria-hidden="true">{weather.icon}</span>
          <span className="banner-temp">{weather.temp}°C</span>
        </div>
      </div>
    </div>
  );
}

export default Banner;
