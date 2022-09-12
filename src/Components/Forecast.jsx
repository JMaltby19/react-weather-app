import { toCelcius } from "../Utils";

const Forecast = ({ temp, weather, dt }) => {
	const options = { weekday: "short", day: "numeric" };

	return (
		<div>
			<div className="forecastDay">
				<div>
					<img
						src={`https://openweathermap.org/img/wn/${weather[0].icon}.png`}
						alt=""
					/>
				</div>
				<p>{new Date(dt * 1000).toLocaleDateString("en-GB", options)}</p>
				<p className="bold">{toCelcius(temp.day)}°C</p>
				<p>{weather[0].description}</p>
			</div>
		</div>
	);
};

export default Forecast;
