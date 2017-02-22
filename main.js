/*var http = require ("http");
http.createServer(function(request, response){
	//send the HTTP header
	// HTTP Status 200 : OK
	// Content Type: text/plain
	response.writeHead(200, {'Content-Type': 'text/plain'});

	//send the response body as "Hello World"
	response.end('Hello World\n');
}).listen(8081);

//Console will print the message
console.log('Server running at http://127.0.0.1:8081/')*/




/*var fs = require("fs");
//blocking code example
var data = fs.readFileSync('input.txt');
console.log(data.toString());
*/

/*//non blocking code example
var fs = require("fs");
fs.readFile('input.txt', function (err, data){
	if(err){
		return console.error(err);
	}
	console.log(data.toString());
});
console.log("Program Ended");*/

//Import events module
var events = require('events');

//Create an eventEmitter Object
var eventEmitter = new events.EventEmitter();

//Bindevent and event handler as follows
//eventEmitter.on('eventName', eventHandler);

//Fire an event
//eventEmitter.emit('eventName');



//create an event handler as follows
var connectHandler = function connected(){
	console.log('connection successful.');

	//fire the data_received event
	eventEmitter.emit('data_received');
}

//Bind the connection event with the handler
eventEmitter.on('connection', connectHandler);

//Bind the data_received event with the anonymous function
eventEmitter.on('data_received', function(){
	console.log('data received succesfully.')
});

//fire the connection event
eventEmitter.emit('connection');

console.log('Program Ended');