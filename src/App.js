import React, { useState } from "react";
import axios from "axios";
import CurrentWeather from "./Components/CurrentWeather";
import CurrentConditions from "./Components/CurrentConditions";
import UpcomingForecast from "./Components/UpcomingForecast";
import Search from "./Components/Search";
import { getGeoAPIUrl, getWeatherAPIUrl } from "./config.js";

function App() {
	const [data, setData] = useState({}); //set the input state from result_2
	const [location, setLocation] = useState(""); //location state we input
	const [loc, setLoc] = useState(""); //location we use from the result url, to render the location e.g. London GB

	const searchLocation = async (e) => {
		if (e.key !== "Enter") return;
		try {
			const locationRes = await axios.get(getGeoAPIUrl(location));
			// console.log(result.data);
			const weather = await axios.get(
				getWeatherAPIUrl(locationRes.data[0].lat, locationRes.data[0].lon)
			);
			setData(weather.data);
			setLoc(locationRes.data);
			// sets the search bar back to blank when the data has been fetched
			e.target.value = "";
		} catch (error) {
			console.log(error);
		}
	};

	const newLocation = (e) => {
		setLocation(e.target.value);
		e.preventDefault();
		if (!location || location === "") return;
	};
	console.log(data);
	console.log(loc);

	const { name, country } = loc && loc[0];

	return (
		<>
			<div className="app">
				<Search newLocation={newLocation} search={searchLocation} />
				{loc && (
					<div className="current-weather-container">
						<div className="loc_name">
							{name} <p>{country}</p>
						</div>
						<CurrentWeather data={data} />
						<CurrentConditions data={data} />
					</div>
				)}
				<UpcomingForecast data={data} />
			</div>
		</>
	);
}

export default App;
