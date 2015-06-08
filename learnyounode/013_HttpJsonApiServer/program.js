var http = require('http');
var url = require('url');

if(process.argv.length > 2) {
	var httpServer = http.createServer(requestProcessor);
	httpServer.listen(process.argv[2]);
} 
else {
	console.log('provide port !');
}


function requestProcessor (request, response) {
	if(request.method === 'GET') {
		var path = url.parse(request.url).pathname;
		var query = url.parse(request.url, true).query;
		if (path === '/api/parsetime'){
			response.writeHead(200, { 'Content-Type': 'application/json' });
           		response.end(parseTime(query));
        	} 
		else if (path === '/api/unixtime') {
 			response.writeHead(200, { 'Content-Type': 'application/json' });
           		response.end(getUnixTime(query));
 	       	} 
		else {
			response.writeHead(404, { 'content-type': 'text/plain'});
			response.end("Invalid URL");
		}
	
	} 
	else {
		response.writeHead(404, { 'content-type': 'text/plain'});
		response.end("Only GET request");
	}
}

function parseTime( query ) {
	var givenDate = new Date(query.iso);
	isoTime = {
		'hour': givenDate.getHours(),
		'minute': givenDate.getMinutes(),
		'second': givenDate.getSeconds()
            };		
	return JSON.stringify(isoTime);
}

function getUnixTime( query ) {
	var givenDate = new Date(query.iso);
	unixTime = { 'unixtime' : givenDate.getTime() };
	return JSON.stringify(unixTime);
}
