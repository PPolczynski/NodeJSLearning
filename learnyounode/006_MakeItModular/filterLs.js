var fileSystem = require('fs')
var path = require('path')

module.exports = function filterLs (filePath, extension, callback) {
	if (filePath === null || extension === null || callback === null) {
		return callback("Arguments incorrect");
	}
	else {
		extension = "." + extension;
  		fileSystem.readdir(filePath, onFoundDirectory);
	}


	function onFoundDirectory (err, list) {
		var filteredList = [];		
		if(!err) {	
			for(var i = 0 ; i < list.length; i++) {
				if (path.extname(list[i]) === extension) { 
					filteredList.push(list[i]);
				}
			}	
		}
		else {
			return callback(err);
		}
		callback(null, filteredList);
	};
};
