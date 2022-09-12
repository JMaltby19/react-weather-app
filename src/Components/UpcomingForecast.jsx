import Forecast from "./Forecast";

// destructering the data instead of using the props name
const UpcomingForecast = ({ data }) => {
	// creating variable for the data
	// if using props, would need to be props.data.daily
	const { daily } = data;

	return (
		<div className="forecast-container">
			{daily &&
				// slicing first index as it is the same as the current day and we want to see the upcoming days forecast
				daily.slice(1).map((item) => {
					return (
						<div>
							{/* spreading the items from daily, rather than destructuring again using props */}
							<Forecast {...item} />
							{/* <Forecast temp={item.temp} weather={item.weather} dt={item.dt} /> */}
						</div>
					);
				})}
		</div>
	);
};

export default UpcomingForecast;
