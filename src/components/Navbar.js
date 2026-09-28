import React, { useState } from 'react';
import './Navbar.css';

function Navbar({ onSearch }) {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city.trim());
      setCity('');
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span className="navbar-logo">⛅</span>
        <span className="navbar-title">WeatherApp</span>
      </div>
      <form className="navbar-search" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          aria-label="Search city"
        />
        <button type="submit" aria-label="Search">Search</button>
      </form>
    </nav>
  );
}

export default Navbar;
