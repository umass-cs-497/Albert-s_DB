// var express = require('express');
// var router = express.Router();
// var User = require('../models/user');

// /* GET users listing. */
// router.get('/', function(req, res) {
//   res.send('respond with a resource');
// });

// module.exports = router;
var db = require('../database');


var User = require('../models/user');

exports.testuser = function(req, res) {
	db.user.testuser();	
}

exports.testnotification = function(req, res) {
	db.user.notification.testNotification(function(err, data) {
		res.json(data);	
	});
}

exports.testbookmark = function(req, res) {
	db.user.bookmark.testBookmark(function(err, data) {
		res.json(data);	
	});	
}
