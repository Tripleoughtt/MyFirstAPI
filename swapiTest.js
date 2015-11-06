'use strict';

var request = require('request');

request('http://swapi.co/api/people/', function (error, response, body){
	if (!error && response.statusCode === 200) {
		var person = JSON.parse(body)
		console.log(person)
	}
})