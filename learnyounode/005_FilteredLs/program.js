var fileSystem = require('fs')
var path = require('path')
var extension;

if (process.argv.length > 3)
{
	extension = '.' +  process.argv[3];
	fileSystem.readdir(process.argv[2], onFoundDirectory);
}
else 
{
	console.log('Give dir and extension'); 
}

function onFoundDirectory (err, list)
{
	if(err != false)
	{
		for(var i = 0 ; i < list.length; i++)
		{
			if (path.extname(list[i]) === extension) 
			{ 
				console.log(list[i].toString());
			}
		}	
	}
	else
	{
		console.log('Error while reading');	
	}
};

