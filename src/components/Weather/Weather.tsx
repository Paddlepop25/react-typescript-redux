import React from "react";
import Header from "../Header";
import WeatherSearch from "./WeatherSearch";
import { useSelector } from "react-redux";
import { RootState } from "../../store/rootReducer";
import { Box } from "../../styles/styledTheme";
import WeatherDisplay from "./WeatherDisplay";

const Weather: React.FC = () => {
	const weatherState = useSelector((state: RootState) => state.weather);
	const weatherLoading = weatherState.loading;
	const weatherError = weatherState.error;
	const weatherData = weatherState.weatherData;

	// must check for weatherData if not, error in type of weatherData
	return (
		<>
			<Header />
			<Box>
				<WeatherSearch title='☀️ ❄️ 🌈 🍀 🌤️ 🌨️ ' />

				{weatherLoading && <code>Loading...</code>}

				{weatherData && <WeatherDisplay weatherData={weatherData} />}

				{weatherError && <code>{weatherError}</code>}
			</Box>
		</>
	);
};

export default Weather;
