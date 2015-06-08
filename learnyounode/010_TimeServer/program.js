var net = require('net');

if(process.argv.length > 2) {
	var server = net.createServer(timeServer);
	server.listen(process.argv[2]);
} 
else {
	console.log("specify port");
}

function timeServer (socket) {
	socket.end(getNow() + '\n' );
}

function getNow() {
	var delimiterDate = '-';
	var delimiterTime = ':';
	var delimiterDateTime = ' ';
	var curentTime = new Date();

	return 	curentTime.getFullYear().toString() +
		delimiterDate + 
		firstZero(curentTime.getMonth() + 1) + 
		delimiterDate + 
		firstZero(curentTime.getDate()) +
		delimiterDateTime +
		firstZero(curentTime.getHours()) + 
		delimiterTime + 
		firstZero(curentTime.getMinutes())
}

function firstZero (toAppend) {
	return (toAppend < 10 ? '0' : '') + toAppend.toString();
}
