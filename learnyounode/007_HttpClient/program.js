var http = require('http');

if (process.argv.length > 2) {
	http.get(process.argv[2], onGet);
}
else {
	console.log('Give URL')
}

function onGet(response) {
	response.setEncoding('utf8')
	response.on("data", function (data) {
		console.log(data);
	});
	response.on("error", console.error);
	response.on("end", function () {
		//console.log("done!");
	});
}
