var request = require('request');

function WeatherData(lat, lon) {
	var apiKey = "442f6fad9a9871839e00c77d18cc2a51";	//my API key
	request("https://api.forecast.io/forecast/"+apiKey+"/"+lat+","+lon, function(error,response,body)) {
		if (!error && response.statusCode == 200) {
			var json = JSON.parse(body)
	}

	var weatherSummary = json.currently.summary
	var icon = json.currently.icon
	
}