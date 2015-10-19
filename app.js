var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')

var index = require('./routes/index')

var app = express()

app.use(bodyParser.json())
app.use('/', index)