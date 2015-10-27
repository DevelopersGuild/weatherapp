var express = require('express');
var router = express.Router();
var request = require('request');
var weather;

/* GET home page. */
router.get('/weather/:lat/:long', function(req, res, next) {
  	var apiKey = "442f6fad9a9871839e00c77d18cc2a51";	//my API key
	weather = ""
	request("https://api.forecast.io/forecast/"+apiKey+"/"+req.params.lat+","+req.params.long, function(error,response,body){
		if (!error && response.statusCode == 200) {
			weather = JSON.parse(body)
			//res.send(weather);
		}
		else{
			res.send("Error reading data");
		}
	})
});

router.get('/weather/impdata/:lat/:long', function(req, res, next) {
	res.send("Current Summary:" + getCurrentSummary() + "\n" + "Current Icon: " + getCurrentIcon() + "\n" + "Current Time:" + getCurrentTime);
});

function getCurrentTime() {
	var timeStamp = weather.currently.time
	var normalTime = new Date(timestamp*1000)
	return normalTime.dateString
}


function getCurrentSummary() {
	return weather.currently.summary
}

function getCurrentIcon() {
	return weather.currently.icon
}


module.exports = router;
