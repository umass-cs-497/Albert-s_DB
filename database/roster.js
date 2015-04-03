var Course = require('../models/course');

exports.testRoster = function(callback) {
	console.log("testing roster");
	Course.find({}, function(err, courses) {
		if(err) {
			console.log("Error with db call");	
		} else {
			callback(undefined, courses);	
		}
	});
}
