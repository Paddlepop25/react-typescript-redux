import React from 'react'
import { useDispatch } from 'react-redux'
import {
  getWeather,
  setWeatherLoading,
} from '../../store/Weather/WeatherActions'
import { WeatherInputStyle } from './WeatherStyles'

interface WeatherSearch {
  title: string
}

const WeatherSearch: React.FC<WeatherSearch> = ({ title }) => {
  const dispatch = useDispatch()

  const [city, setCity] = React.useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.currentTarget.value)
  }

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (city.trim() === '') {
      return alert('City box must not be empty')
    }
    dispatch(setWeatherLoading)
    dispatch(getWeather(city))
    setCity('')
  }

  return (
    <>
      <p style={{ marginBottom: '-10px' }}>{title}</p>
      <form onSubmit={handleFormSubmit}>
        <WeatherInputStyle
          type='text'
          value={city}
          onChange={handleChange}
          placeholder='search for the weather in a city'
        />
        <button>Search 🔍</button>
      </form>
    </>
  )
}

export default WeatherSearch
