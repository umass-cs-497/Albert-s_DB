var Course = require('../models/course');

exports.testComment = function(callback) {
	console.log('testing comment');	
	Course.find({}, function(err, courses) {
		if(err) {
			console.log("Error with db call");	
		} else {
			callback(undefined, courses);	
		}
	});
}
