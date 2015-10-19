var request = require('request');

function WeatherData(lat, lon) {
	var apiKey = "442f6fad9a9871839e00c77d18cc2a51";	//my API key
	var weather = ""
	request("https://api.forecast.io/forecast/"+apiKey+"/"+lat+","+lon, function(error,response,body)) {
		if (!error && response.statusCode == 200) {
<<<<<<< HEAD
			weather = JSON.parse(body)
		}
		else{
			console.log("Error reading data")
		}
	}

	
	
}

/*
examples: var data = new WeatherData(37, 100)
		  var currently = data.weather.currently
=======
			var jsonBody = JSON.parse(body)
	}

	var weatherSummary = jsonBody.currently.summary
	var icon = jsonBody.currently.icon
}
>>>>>>> 5cc125f545f4f300391e18c51cb584cbcc2b6235
