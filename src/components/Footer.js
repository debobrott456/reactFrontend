import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span>⛅ WeatherApp</span>
          <p>Real-time weather for every city on the planet.</p>
        </div>
        <div className="footer-links">
          <span className="footer-col-title">Quick Links</span>
          <a href="#top">Home</a>
          <a href="#forecast">Forecast</a>
          <a href="#about">About</a>
        </div>
        <div className="footer-links">
          <span className="footer-col-title">Data Source</span>
          <a href="https://openweathermap.org" target="_blank" rel="noreferrer">OpenWeatherMap</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} WeatherApp. Built with React.</p>
      </div>
    </footer>
  );
}

export default Footer;
