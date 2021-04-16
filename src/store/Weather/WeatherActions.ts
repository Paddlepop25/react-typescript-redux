import { Dispatch } from "redux";

import {
	WEATHER_LOADING,
	WEATHER_SUCCESS,
	WEATHER_FAIL,
	WeatherError,
	WeatherData,
	WeatherActionsDispatch,
} from "./WeatherTypes";

export const setWeatherLoading = (): WeatherActionsDispatch => {
	return {
		type: WEATHER_LOADING,
	};
};

export const setWeatherError = (): WeatherActionsDispatch => {
	return {
		type: WEATHER_FAIL,
		payload: "",
	};
};

export const getWeather = (city: string) => async (
	dispatch: Dispatch<WeatherActionsDispatch>
) => {
	const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_APIKEY}`;

	// 2x .then to get data from promise
	try {
		const fetchWeather = await fetch(endpoint);
		// console.log(fetchWeather)
		const weatherResult = await fetchWeather.json();

		// fetchWeather.ok is true or false. can use fetchWeather.status also: 404 / 200
		// if (!fetchWeather.ok) {
		if (fetchWeather.status === 404) {
			const weatherErrorMsg: WeatherError = weatherResult;
			// console.log(weatherErrorMsg.cod) // 404
			// console.log(weatherErrorMsg.message)
			throw new Error(weatherErrorMsg.message);
		}

		if (fetchWeather.status === 200) {
			const weatherData: WeatherData = weatherResult;
			dispatch({
				type: WEATHER_SUCCESS,
				payload: weatherData,
			});
		}
	} catch (error) {
		dispatch({
			type: WEATHER_FAIL,
			payload: error.message,
		});
	}
};

// body: (...)
// bodyUsed: false
// headers: Headers {}
// ok: true
// redirected: false
// status: 200
// statusText: "OK"
// type: "cors"
// url: "https://api.openweathermap.org/data/2.5/weather?q=paris&appid="
// __proto__: Response
