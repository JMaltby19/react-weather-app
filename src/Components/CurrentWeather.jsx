import { toCelcius } from "../Utils";

const CurrentWeather = ({ data }) => {
	const { current } = data;

	return (
		<div>
			{typeof current != "undefined" ? (
				<div className="top">
					<div className="location">
						{/* add a ternery when accessing a child element. Will fail to load as it will search for country before sys */}
					</div>
					<div className="temp">
						{current ? <h1>{toCelcius(current.temp)}°C</h1> : null}
					</div>
					<div className="icon">
						<img
							src={`https://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`}
							alt={`Weather icon for ${current.weather[0].main}`}
						/>
					</div>
					<div className="description">
						{current.weather ? <p>{current.weather[0].main}</p> : null}
					</div>
				</div>
			) : (
				""
			)}{" "}
		</div>
	);
};

export default CurrentWeather;
