var routes = require('./routes');

exports.defineRoutes = function(app) {
	app.get('/', function(req, res) {
		res.send("<a href='/showusers'>Show Users</a> <br> <a href='/showcourses'>Show Courses</a> <br> <a href='/adduser'>Add User</a> <br> <a href='/addcourse'>Add Courses</a>");
	});

	app.get('/testnotification', routes.users.testnotification);
	app.get('/testbookmark', routes.users.testbookmark);
	app.get('/testuser', routes.users.testuser);
	app.get('/testlecture', routes.courses.testlecture);
	app.get('/testcomment', routes.courses.testcomment);
	app.get('/testattachment', routes.courses.testattachment);
	app.get('/testroster', routes.courses.testroster);
	
};
