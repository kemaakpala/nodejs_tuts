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
// var events = require('events');

//Create an eventEmitter Object
// var eventEmitter = new events.EventEmitter();

//Bindevent and event handler as follows
//eventEmitter.on('eventName', eventHandler);

//Fire an event
//eventEmitter.emit('eventName');

/*
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
*/

/*
var events = require('events');
var eventEmitter = new events.EventEmitter();

//listner #1
var listner1 = function listner1(){
	console.log('listner1 executed.');
}

//listner #2
var listner2 = function listner2(){
	console.log('listner2 executed.');
}

//Bind the connection event with the listner1 function
eventEmitter.addListener('connection', listner1);

//Bind the connection event with the listner2 function
eventEmitter.on('connection', listner2);

var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + "Listner(s) listening to connection event");

//Fire the connection event
eventEmitter.emit('connection');
//Remove the binding of Listner1 function
eventEmitter.removeListener('connection', listner1);
console.log("Listner1 will not listen now.");

//Fire the connection
eventEmitter.emit('connection');

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListeners + "Listener(s) listening to connection event");

console.log("Program Ended.");*/

//Reading from a Stream
// var fs = require('fs');
// var data = '';
//
// // Create a readable stream
// var readerStream = fs.createReadStream('input.txt');
//
// //Set the encoding to be utf8
// readerStream.setEncoding('UTF8');
//
// //Handle stream events --> data, end, and error
// readerStream.on('data', function(chunk){
//   data += chunk;
// })
//
// readerStream.on('end', function(){
//   console.log(data);
// });
//
// readerStream.on('error', function(err){
//   console.log(err.stack);
// })
//
// console.log("Program Ended");

//Writing to a Stream

// var fs = require("fs");
// var data = 'Simply Easy Learning';
//
// //Create a writable stream
// var writerStream = fs.createWriteStream('output.txt');
//
// //Write the data to stream with encoding to be utf8
// writerStream.write(data, 'UTF8');
//
// //Mark the end of the file
// writerStream.end();
//
// //Handle stream events --> finsih, and error
// writerStream.on('finish', function(){
//   console.log("Write completed.");
// });
//
// writerStream.on('error', function(err){
//   console.log(err.stack);
// });
//
// console.log('Program Ended');

//Piping Streams || reading from one stream and writing to another stream

// var fs = require('fs');
//
// //create a readable stream
// var readerStream = fs.createReadStream('input.txt');
//
// //create a writable stream
// var writerStream = fs.createWriteStream('output.txt');
//
// //Pip the read and write operations
// //read input.txt and write data to output.txt
//
// readerStream.pipe(writerStream);
// console.log("Program Ended");

// //Chaining the Streams
// var fs = require("fs");
// var zlib = require("zlib");

// //Compress the file input.txt to input.txt.gz
// fs.createReadStream('input.txt')
//   .pipe(zlib.createGzip())
//   .pipe(fs.createWriteStream('input.txt.gz'));
// console.log("File Compressed.");

// //Decompress the file input.txt to input.txt.gz
// fs.createReadStream('input.txt.gz')
//   .pipe(zlib.createGunzip())
//   .pipe(fs.createWriteStream('input.txt'));
//   console.log("File Decompressed");

// var fs = require("fs");
// Asynchronous read
// fs.readFile('input.txt', function(err, data){
//   if(err){
//     return console.error(err)
//   }
//   console.log("Asynchronous read: "+ data.toString())
// });
//
// // Synchronous read
// var data = fs.readFileSync('input.txt');
// console.log('Synchronous read: '+ data.toString());
//
// console.log("Program Ended");

var fs = require("fs");

// // Asynchronous - Opening File
// console.log("Going to open file!");
// fs.open('input.txt', 'r+', function(err, fd){
//   if (err) {
//     return console.error(err);
//   }
//   console.log("File opened successfully!");
// });

// console.log("Going to get file info!");
// fs.stat('input.txt', function(err, stats){
//   if(err){
//     return console.error(err);
//   }
//   console.log(stats);
//   console.log("Got file info successfully!");
//
//   //check file type
//   console.log("isFile ? "+ stats.isFile());
//   console.log("isDirectory ? " + stats.isDirectory());
// });
//write to a file // asynchronously read written data
// console.log("Going to write into existing file");
// fs.writeFile('input.txt', 'Simply Easy Learning', function(err){
//   if(err){
//     return console.error();
//   }
//
//   console.log("Data written successfully!");
//   console.log("Let's read newly written data");
//
//   fs.readFile('input.txt', function (err, data){
//     if (err) {
//       return console.console.error(err);
//     }
//     console.log("Asynchronous read: " + data.toString());
//   });
// });

var buf = new Buffer(1024);
// console.log("Going to open an existing file");
// fs.open('input.txt', 'r+', function(err, fd) {
//   if(err){
//     return console.error(err);
//   }
//   console.log("File opened successfully!");
//   console.log("Going to read the file");
//   /*
//   fs.read(  fd, // this is the file descriptor returned by fs.open().
//             buffer, // this is the buffer that data will be writted to.
//             offset, // this is the offset in the buffer to start writing at.
//             length, // this is the number of bytes to read.
//             position, // this is an integer that specifies where to begin reading from. {0,null- data will be read from the current file position}
//             callback // this is the callback function which gets the 3 arguments, (err, bytesRead, buffer).
//   );
//   */
//   fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
//     if(err){
//       console.log(err);
//     }
//     console.log(bytes + " bytes read");
//
//     //Print only read bytes to avoid junk.
//     if(bytes > 0){
//       console.log(buf.slice(0, bytes).toString());
//     }
//
//     // Close the opened file.
//     /*
//     fs.close ( fd, //this is the file descriptor returned by fs.open().
//                 callback // this is the callback function only the exception argument is given to it.
//     );
//     */
//     fs.close(fd, function(err){
//       if (err){
//         console.log(err);
//       }
//       console.log("File closed successfully.")
//     });
//   });
// });

console.log("Going to open an existing file");
fs.open('input.txt', 'r+', function(err, fd){
  if(err){
    return console.error(err);
  }
  console.log("File opened successfully!");
  console.log("Going to truncate the file after 10 bytes");

  // Truncate the opened file.
  fs.ftruncate(fd, 10, function(err){
    if(err){
      console.log(err);
    }
    console.log("File truncated successfully.");
    console.log("Going to read the same file");

    fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
      if(err){
        console.log(err);
      }

      // Print only read bytes to avoid junk.
      if(bytes > 0){
        console.log(buf.slice(0, bytes).toString())
      }

      // Close the opened file.
      fs.close(fd, function(err){
        if(err){
          console.log(err);
        }
        console.log("File closed successfully.");
      });
    });
  });


});
