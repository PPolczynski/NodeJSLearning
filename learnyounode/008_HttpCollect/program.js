var http = require('http');

if (process.argv.length > 2) {
	http.get(process.argv[2], onGet);
}
else {
	console.log('Give URL')
}

function onGet(response) {
	var concatStream= [];
	response.on("data", function (data) {
		concatStream += data;
	});
	response.on("error", console.error);
	response.on("end", function () {
		console.log(concatStream.length);
		console.log(concatStream.toString());
	});
}
