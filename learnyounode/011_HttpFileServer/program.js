var http = require('http');
var fs = require('fs');
var filePath = '';

if(process.argv.length > 3) {
	filePath = process.argv[3];
	var httpServer = http.createServer(requestProcessor);
	httpServer.listen(process.argv[2]);
} 
else {
	console.log('provide both port and path to file!');
}


function requestProcessor (request, response) {
	var src = fs.createReadStream(filePath);
	response.writeHead(200, { 'content-type': 'text/plain'}); //added from solusion :(
	src.pipe(response);
}
