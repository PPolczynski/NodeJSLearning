var http = require('http');
var output = [];
var cnt = 0
var nrOfRequests = 0;

if (process.argv.length > 2) {
	nrOfRequests = process.argv.length - 2;
	for(i = 0; i < nrOfRequests; i++){
		worker(i);
	}
}
else {
	console.log('Give URL')
}

function worker(idx) {
	http.get(process.argv[idx + 2], function onGet (response) {
		var concatStream= [];
 		response.on("data", function (data) {
			concatStream += data;
		});
		response.on("error", console.error);
		response.on("end", function () {
			output[idx] = concatStream.toString();
			if(++cnt == nrOfRequests){
				printOutput ();			
			}
		});
	});
}

function printOutput () {
	for (var i = 0; i < nrOfRequests; i++) {
		console.log(output[i]);
	}
}
