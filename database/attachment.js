var Course = require('../models/course');

exports.testAttachment = function (callback) {
	console.log('testing attachment');	
	Course.find({}, function(err, courses) {
		if(err) {
			console.log("Error with db call");
		} else {
			callback(undefined, courses);	
		}
	});
}
