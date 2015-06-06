var filterLS = require('./filterLs.js');

if (process.argv.length > 3) {
	filterLS(process.argv[2],process.argv[3], function (err, list) {
	        if (err) {
			return console.log('err en imprimirLista');
		}
		else {
			for(var i = 0 ; i < list.length; i++) {
				console.log(list[i]);
			}
		}
	});
}
else {
	console.log('Give dir and extension'); 
}
