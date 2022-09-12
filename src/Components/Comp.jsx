<div className="container">
	{typeof data.weather != "undefined" ? (
		<div className="top">
			<div className="location">
				{/* add a ternery when accessing a child element. Will fail to load as it will search for country before sys */}
				<div>
					{data.name} {data.sys ? <p>{data.sys.country}</p> : null}
				</div>
			</div>
			<div className="temp">
				{data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
			</div>
			<div className="icon">
				<img
					src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
					alt=""
				/>
			</div>
			<div className="description">
				{data.weather ? <p>{data.weather[0].main}</p> : null}
			</div>
		</div>
	) : (
		""
	)}

	{/* if theres no data.name, we want it to show nothing */}
	{data.name !== undefined && (
		<div className="bottom">
			<div className="feels">
				{data.main ? (
					// toFixed() removes decimal places
					<p className="bold">{data.main.feels_like.toFixed()}°C</p>
				) : null}
				<p>Feels Like</p>
			</div>
			<div className="humidity">
				{data.main ? <p className="bold">{data.main.humidity}%</p> : null}
				<p>Humidity</p>
			</div>
			<div className="wind">
				{data.wind ? (
					<p className="bold">{data.wind.speed.toFixed()} MPH</p>
				) : null}
				<p>Wind Speed</p>
			</div>
		</div>
	)}
</div>;
