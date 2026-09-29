// Mock weather service — swap with a real API call using OpenWeatherMap
// GET https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}&units=metric

const MOCK_DATA = {
  london: {
    city: 'London', country: 'GB', temp: 14, feelsLike: 11,
    humidity: 78, windSpeed: 22, visibility: 9, pressure: 1012,
    clouds: 65, description: 'overcast clouds', icon: '☁️',
  },
  paris: {
    city: 'Paris', country: 'FR', temp: 18, feelsLike: 16,
    humidity: 60, windSpeed: 15, visibility: 10, pressure: 1018,
    clouds: 30, description: 'partly cloudy', icon: '⛅',
  },
  tokyo: {
    city: 'Tokyo', country: 'JP', temp: 26, feelsLike: 28,
    humidity: 72, windSpeed: 10, visibility: 8, pressure: 1008,
    clouds: 20, description: 'clear sky', icon: '☀️',
  },
  dubai: {
    city: 'Dubai', country: 'AE', temp: 38, feelsLike: 42,
    humidity: 30, windSpeed: 18, visibility: 12, pressure: 1005,
    clouds: 5, description: 'sunny', icon: '🌞',
  },
  sydney: {
    city: 'Sydney', country: 'AU', temp: 22, feelsLike: 21,
    humidity: 55, windSpeed: 20, visibility: 15, pressure: 1020,
    clouds: 40, description: 'light breeze', icon: '🌤️',
  },
  'new york': {
    city: 'New York', country: 'US', temp: 20, feelsLike: 18,
    humidity: 65, windSpeed: 25, visibility: 11, pressure: 1015,
    clouds: 50, description: 'scattered clouds', icon: '⛅',
  },
};

const FORECAST_ICONS = ['☀️', '⛅', '🌧️', '🌤️', '🌩️'];
const FORECAST_DESC  = ['sunny', 'partly cloudy', 'light rain', 'mostly clear', 'thunderstorm'];

function generateForecast() {
  const today = new Date().getDay();
  return Array.from({ length: 5 }, (_, i) => ({
    dayIndex: (today + i + 1) % 7,
    icon: FORECAST_ICONS[i % FORECAST_ICONS.length],
    description: FORECAST_DESC[i % FORECAST_DESC.length],
    high: Math.round(15 + Math.random() * 20),
    low: Math.round(5 + Math.random() * 10),
  }));
}

export async function fetchWeather(city) {
  // Simulate network delay
  await new Promise((r) => setTimeout(r, 800));

  const key = city.toLowerCase();
  const data = MOCK_DATA[key];

  if (!data) {
    throw new Error(`City "${city}" not found. Try: London, Paris, Tokyo, Dubai, Sydney, or New York.`);
  }

  return { ...data, forecast: generateForecast() };
}
