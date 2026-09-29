import React from 'react';
import './ForecastSection.css';

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

function ForecastSection({ forecast }) {
  if (!forecast || forecast.length === 0) return null;

  return (
    <section className="forecast-section" aria-label="5-day forecast">
      <div className="forecast-inner">
        <h3 className="forecast-title">5-Day Forecast</h3>
        <div className="forecast-list">
          {forecast.map((day, i) => (
            <div className="forecast-item" key={i}>
              <span className="forecast-day">{DAYS[day.dayIndex]}</span>
              <span className="forecast-icon" aria-hidden="true">{day.icon}</span>
              <span className="forecast-desc">{day.description}</span>
              <div className="forecast-temps">
                <span className="forecast-high">{day.high}°</span>
                <span className="forecast-low">{day.low}°</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ForecastSection;
