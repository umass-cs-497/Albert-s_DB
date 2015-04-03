var express = require('express');
var path = require('path');
// var favicon = require('static-favicon');
// var logger = require('morgan');
// var cookieParser = require('cookie-parser');
// var bodyParser = require('body-parser');
// var mongoose = require('mongoose');
// var mongo = require('mongodb');
// var api = require('./controllers/api');

// var User = require('./models/user');
// var Course = require('./models/course');

// var routes = require('./routes/index');
// var users = require('./routes/users');

// var db = mongoose.connect('mongodb://localhost/lectureviewerdb', function (err, res) {
//     if(err) {
//         console.log("Connection Failed");
//     } else {
//         console.log("Connection Success");
//     }
// });

var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// app.use(favicon());
// app.use(logger('dev'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded());
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', routes);
// app.use('/users', users);
// app.get('/test', api.test);

require('./configuration').configureExpress(app);
require('./routeConfiguration').defineRoutes(app);

// app.get('/', function(req, res) {
//     res.send("<a href='/users'>Show Users</a> <br> <a href='/courses'>Show Courses</a> <br> <a href='/adduser'>Add User</a> <br> <a href='/addcourse'>Add Courses</a>");
// });

// app.get('/users', function(req, res) {
//     User.find({}, function(err, names) {
//         res.json(names);
//     });
// });

// app.get('/courses', function(req, res) {
//     Course.find({}, function(err, courses) {
//         res.json(courses);
//     });
// });

// app.get('/adduser', function(req, res) {
//     new User({"name" : "John"}).save();
//     res.json("Done adding new user");
// });

// app.get('/addcourse', function(req, res) {
//     new Course({"course" : "Cmp Sci 121"}).save();
//     res.json("Done adding new class");
// });

/// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//     var err = new Error('Not Found');
//     err.status = 404;
//     next(err);
// });

// /// error handlers

// // development error handler
// // will print stacktrace
// if (app.get('env') === 'development') {
//     app.use(function(err, req, res, next) {
//         res.status(err.status || 500);
//         res.render('error', {
//             message: err.message,
//             error: err
//         });
//     });
// }

// // production error handler
// // no stacktraces leaked to user
// app.use(function(err, req, res, next) {
//     res.status(err.status || 500);
//     res.render('error', {
//         message: err.message,
//         error: {}
//     });
// });


module.exports = app;
