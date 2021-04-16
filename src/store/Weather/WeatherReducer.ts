import {
  WEATHER_LOADING,
  WEATHER_FAIL,
  WEATHER_SUCCESS,
  WeatherData,
  WeatherActionsDispatch,
} from './WeatherTypes'

interface WeatherState {
  loading: boolean
  weatherData: WeatherData | null
  error: string
}

const initialState = {
  loading: false,
  weatherData: null,
  error: '',
}

// case refer XXX_XX to Action Creators in WeatherTypes.ts
// any action.payload refer to WeatherTypes.ts (if available)
// and the return state refer to state above
const WeatherReducer = (
  state: WeatherState = initialState,
  action: WeatherActionsDispatch
): WeatherState => {
  switch (action.type) {
    case WEATHER_LOADING: {
      return {
        ...state,
        loading: true,
      }
    }
    case WEATHER_FAIL: {
      return {
        loading: false,
        weatherData: null,
        error: action.payload,
      }
    }
    case WEATHER_SUCCESS: {
      return {
        loading: false,
        error: '',
        weatherData: action.payload,
      }
    }
    default:
      return state
  }
}

export default WeatherReducer
