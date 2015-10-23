var request = require('request');

function getWeatherJSON(lat, lon) {
	var apiKey = "442f6fad9a9871839e00c77d18cc2a51";	//my API key
	var weather = ""
	request("https://api.forecast.io/forecast/"+apiKey+"/"+lat+","+lon, function(error,response,body) {
		if (!error && response.statusCode == 200) {
			var jsonBody = JSON.parse(body)
		}
		else{
			console.log("Error reading data")
		}

		return jsonBody
		res.send(jsonBody);

	})
	return 'fuck'
}

console.log("hi")
var newJSONObj = getWeatherJSON(20,20)
console.log(newJSONObj)

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
