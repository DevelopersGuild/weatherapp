var request = require('request');

function WeatherData(lat, lon) {
	var apiKey = "442f6fad9a9871839e00c77d18cc2a51";	//my API key
	request("https://api.forecast.io/forecast/"+apiKey+"/"+lat+","+lon, function(error,response,body)) {
		if (!error && response.statusCode == 200) {
			var jsonBody = JSON.parse(body)
	}

	var weatherSummary = jsonBody.currently.summary
	var icon = jsonBody.currently.icon

	Object hourlyTempData;	//store hourly temperature data
	for (var key in jsonBody.hourly.data) {
		if (jsonBody.hasOwnProperty(key) && key == "temperature") {		//filters out prototypes
			// adds temperature key-value pairs from jsonBody to hourlyData
			hourlyTempData[key] = jsonBody.hourly.data[key]			
		}
	}
}