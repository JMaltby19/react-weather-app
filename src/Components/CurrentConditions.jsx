import { toCelcius } from "../Utils";

const CurrentConditions = ({ data }) => {
	const { current } = data;

	return (
		<div>
			{/* if theres no data.current, we want it to show nothing */}
			{data.current !== undefined && (
				<div className="bottom">
					<div className="feels">
						<p>Feels Like</p>
						<p className="bold">{toCelcius(current.feels_like)}°C</p>
					</div>
					<div className="humidity">
						<p>Humidity</p>
						<p className="bold">{current.humidity}%</p>
					</div>
					<div className="wind">
						<p>Wind Speed</p>
						<p className="bold">{current.wind_speed.toFixed()} MPH</p>
					</div>
				</div>
			)}
		</div>
	);
};

export default CurrentConditions;
