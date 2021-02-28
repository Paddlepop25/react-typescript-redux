import React from 'react'
import { WeatherData } from '../../store/Weather/WeatherTypes'

interface WeatherProps {
  weatherData: WeatherData
}

const WeatherDisplay: React.FC<WeatherProps> = ({ weatherData }) => {
  const fahrenhite = (weatherData.main.temp * 1.8 - 459.67).toFixed(2)
  const celcius = (weatherData.main.temp - 273.15).toFixed(2)

  return (
    <>
      <h3>
        {weatherData.name} - {weatherData.sys.country}
      </h3>
      <p>{weatherData.weather[0].description}</p>
      <img
        src={`http://openweather.org/img/wn/${weatherData.weather[0].icon}.png`}
        alt={weatherData.name}
      />
      <p>
        Temperature: {celcius}
        <sup>&#8451;</sup> / {fahrenhite}
        <sup>&#8457;</sup>
      </p>
      <p>Humidity: {weatherData.main.humidity}</p>
      <p>Pressure: {weatherData.main.pressure}</p>
      <p>Wind: {weatherData.wind.speed}</p>
    </>
  )
}

export default WeatherDisplay
