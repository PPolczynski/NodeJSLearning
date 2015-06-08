var http = require('http');

if(process.argv.length > 2) {
	var httpServer = http.createServer(requestProcessor);
	httpServer.listen(process.argv[2]);
} 
else {
	console.log('provide port !');
}


function requestProcessor (request, response) {
	if(request.method === 'POST') {
		var requestData = '';				
	
      		request.on('data', function(data) {
        		requestData += data;
		});
		request.on('end', function() {
			response.writeHead(200, { 'content-type': 'text/plain'});
			response.end(requestData.toString().toUpperCase());
		});

	} 
	else {
		response.writeHead(404, { 'content-type': 'text/plain'});
		response.end("Only post request");
	}
}
