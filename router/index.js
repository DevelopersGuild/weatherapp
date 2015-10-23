var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/weather/:lat/:long', function(req, res, next) {
  	var apiKey = "442f6fad9a9871839e00c77d18cc2a51";	//my API key
	var weather = ""
	request("https://api.forecast.io/forecast/"+apiKey+"/"+req.params.lat+","+req.params.long, function(error,response,body){
		if (!error && response.statusCode == 200) {
			weather = JSON.parse(body)
			res.send(weather);
		}
		else{
			res.send("Error reading data");
		}
	})
});

module.exports = router;
