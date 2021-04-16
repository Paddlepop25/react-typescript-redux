export const WEATHER_LOADING = 'WEATHER_LOADING'
export const WEATHER_SUCCESS = 'WEATHER_SUCCEES'
export const WEATHER_FAIL = 'WEATHER_FAIL'

// this for weather: Weather[]
interface Weather {
  description: string
  icon: string
  id: number
  main: string
}

export interface WeatherData {
  base: string
  clouds: {
    all: number
  }
  cod: number
  coord: {
    long: number
    lat: number
  }
  dt: number
  id: number
  main: {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    humidity: number
  }
  name: string
  sys: {
    type: number
    id: number
    country: string
    sunrise: number
    sunset: number
  }
  timezone: number
  visibility: number
  weather: Weather[]
  wind: {
    speed: number
    deg: number
  }
}

export interface WeatherError {
  cod: string
  message: string
}

// action creators
interface WeatherLoadingAction {
  type: typeof WEATHER_LOADING
}

interface WeatherFailAction {
  type: typeof WEATHER_FAIL
  payload: string
}

interface WeatherSuccessAction {
  type: typeof WEATHER_SUCCESS
  payload: WeatherData
}

export type WeatherActionsDispatch =
  | WeatherLoadingAction
  | WeatherFailAction
  | WeatherSuccessAction
