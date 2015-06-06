var fileSystem = require('fs')
if (process.argv.length > 2)
{
	fileSystem.readFile(process.argv[2],onDoneReading);
}
else 
{
	console.log("Give Path to the file");
}

function onDoneReading (err, data)
{
	if(err != false)
	{
		console.log(data.toString().split("\n").length - 1);	
	}
	else
	{
		console.log("Error while reading");	
	}
};

