var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')

var index = require('./router/index')

var app = express()

app.use(bodyParser.json())
app.use('/', index)

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

module.exports = app;