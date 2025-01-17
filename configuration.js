var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
// var mongo = require('mongodb');


exports.configureExpress = function(app) {
	var db = mongoose.connect('mongodb://localhost/lectureviewer_db', function (err, res) {
	    if(err) {
	        console.log("Connection Failed");
	    } else {
	        console.log("Connection Success");
	    }
	});

	app.set('views', path.join(__dirname, 'views'));
	app.set('view engine', 'jade');
	// app.use(favicon());
	// app.use(express.logger('dev'));
	// app.use(express.bodyParser.json());
	// app.use(express.bodyParser.urlencoded());
	// app.use(express.cookieParser());
	app.use(express.static(path.join(__dirname, 'public')));

	// /// catch 404 and forward to error handler
	// app.use(function(req, res, next) {
	//     var err = new Error('Not Found');
	//     err.status = 404;
	//     next(err);
	// });

	/// error handlers

	// development error handler
	// will print stacktrace
	if (app.get('env') === 'development') {
	    app.use(function(err, req, res, next) {
	        res.status(err.status || 500);
	        res.render('error', {
	            message: err.message,
	            error: err
	        });
	    });
	}

	// production error handler
	// no stacktraces leaked to user
	app.use(function(err, req, res, next) {
	    res.status(err.status || 500);
	    res.render('error', {
	        message: err.message,
	        error: {}
	    });
	});
}