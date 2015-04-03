var Course = require('../models/course');

exports.testLecture = function(callback) {
	console.log('testing lecture');	
	Course.find({}, function(err, courses) {
		if(err) {
			console.log("Error with db call");	
		} else {
			callback(undefined, courses);	
		}
	});
}
