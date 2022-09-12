const BASE_URL = "https://api.openweathermap.org/";
const API_KEY = "6154e663bbb3ccb03a3c16d89d9ac4ad";

export function getGeoAPIUrl(location) {
	return `${BASE_URL}geo/1.0/direct?q=${location}&limit=1&appid=${API_KEY}`;
}

export function getWeatherAPIUrl(lat, lon) {
	return `${BASE_URL}data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${API_KEY}`;
}
