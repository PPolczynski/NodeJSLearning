var fileSystem = require('fs')
if (process.argv.length > 2)
{
	console.log(fileSystem.readFileSync(process.argv[2]).toString().split("\n").length -1)
} else {
	console.log("Give Path to the file")
}
