'use strict';

var http = require('http')

var methods = require('./util')

var md5 = require('md5')

console.log(methods)

var server = http.createServer(function(req, res){
	res.setHeader('Access-Control-Allow-Origin', '*')
	console.log('request recieved');
	var timeStamp = Date.now();
	var name =  req.url.split('/')
	console.log(name)
	// res.write(name[0])
	
	if(name[1] === 'math' && name[2] === 'cube'){
		res.write(`\n ${name[2]} cubed is: ${methods.cube(name[3])} \n`)

	} else if (name[1]=== 'math' && name[2] === 'square'){
		res.write(`\n ${name[2]} squared is: ${methods.square(name[3])} \n`)

	} else if (name[1] === 'math' && name[2] === 'add'){
		var nums = name.slice(3)
		res.write(`\n your numbers added are:  ${methods.add(nums)} \n`)
	} else if (name[1] === 'gravatar'){
			res.write(`\n Your gravatar address is:  http://www.gravatar.com/avatar/${md5(name[2])}\n`)
	} else if (name[1] === 'sentence'){
		var decoded = decodeURI(name[2])
		console.log(decoded)
		var response = methods.counter(decoded)
		console.log(response)
		res.write('\n' + response + '\n')

  } else {
		res.write('\nINVALID FUNCTION!\n')
	}
	res.end();
});
	
	//console.log(name)
	//res.write('Hello ' + name + '\n')
	// console.log('\nHello, ', name);
	// console.log('\nMethod:', req.method)
	// res.write(timeStamp + '\n');
server.listen(8000)