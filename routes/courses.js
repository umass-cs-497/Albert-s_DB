var db = require('../database');

exports.testlecture = function (req, res) {
	db.course.lecture.testLecture(function(err, data) {
		res.json(data);	
	});
}

exports.testcomment = function(req, res) {
	db.course.comment.testComment(function(err, data) {
		res.json(data);	
	});	
}

exports.testattachment = function(req, res) {
	db.course.attachment.testAttachment(function(err, data) {
		res.json(data);	
	});	
}

exports.testroster = function(req, res) {
	db.course.roster.testRoster(function(err, data) {
		res.json(data);	
	});	
}
