var request = require('request');



function getCurrentTime(lat, lon) {
	jsonBody = getWeatherJSON(lat, lon)
	var timeStamp = jsonBody.currently.time
	var normalTime = new Date(timestamp*1000)
	return normalTime.dateString
}


function getCurrentSummary(lat, lon) {
	jsonBody = getWeatherJSON(lat, lon)
	return jsonBody.currently.summary
}

function getCurrentIcon(lat, lon) {
	jsonBody = getWeatherJSON(lat, lon)
	return jsonBody.currently.icon
}

/*
var data = new WeatherData(37, 100)
var weatherSummary = jsonBody.currently.summary
var icon = jsonBody.currently.icon

*/
