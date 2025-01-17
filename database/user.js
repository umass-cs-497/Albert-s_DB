var User = require('../models/user');
exports.notification = require('./notification');
exports.bookmark = require('./bookmark');

/*
  Useful methods to access the User database.
  For getter methods, callback should in the form function(error, returned_data).
  For setter methods, callback should in the form function(error, number_of_docs_affected, raw_mongo_response).
 */


 /*
  Method to add course to student account by email.
 */
exports.addCourseById = function(id, courseId, callback) {
  	User.findById(id, function(err, user) {
    	if (err) {
      		callback(err);
      	}
    	else if (!user) {
      		callback("email does not exist");
      	}
    	else {
	     	console.log(user);
	      	console.log(user.courses);
	      	user.courses.push(courseId);
	      	callback(undefined, user);
    	}
  	});
}


/*
  Method to create a user with the given email, password, username and role.
 */
exports.createUser = function(email, password, username, role, callback) {
  	User.findOne({email: email}, function(err, user) {
    	if (err) {
      		callback(err);
      	}
    	else if (user) {
      		callback("user with email " + email + " already exists.");
    	}
    	else {
      		User.create({
        		email: email,
        		password: password,
        		username: username,
        		role: role
      		}, callback);
    	}
  	});
}


/*
  Method to delete user from database by email
 */
exports.deleteUserById = function(id, callback) {
  	User.findByIdAndRemove(id, function(err, user) {
	    if (err) {
	      callback(err);
	    }
	    else {
	      callback(undefined, user);
	    }
  	});
}


/*
  Method to drop the whole user collection
 */
exports.dropUserDatabase = function(callback) {
  	User.remove({}, function(err) {
	    if (err) {
	      console.log(err);
	    }
	    else {
	      console.log("user database dropped");
	    }
	    callback();
  	});
}


/*
  Method to get a user's registered courses by user's email.
 */
exports.getCoursesById = function(id, callback) {
  	User.findById(id)
      	.populate('courses')
      	.exec(function(err, user) {
	        if (err) {
	          callback(err);
	        }
	        else if (!user) {
	          callback("email does not exist");
	        }
	        else {
	          callback(undefined, user.courses);
	        }
      	});
}


/*
  Method to get user's role (student, instructor,...) by user's email.
 */
exports.getUserRoleById = function(id, callback) {
  	User.findById(id, function(err, user) {
	    if (err) {
	      callback(err);
	    }
	    else if (!user) {
	      callback('email does not exist.');
	    }
	    else {
	      callback(undefined, user.role);
	    }
  	});
}


/*
  Method to get the whole user's document in the database by objectId.
 */
exports.getUserById = function(id, callback) {
  	User.findById(id, function(err, user) {
	    if (err) {
	      callback(err);
	  	}
	    else if (!user) {
	      callback("userID does not exist");
	    }
	    else {
	      callback(undefined, user);
	    }
  	});
}


/*
  Method to change user first and last name.
 */
exports.setNameById = function(id, firstName, lastName, callback) {
  	User.findByIdAndUpdate(
    	id,
      	{$set: {name : {first: firstName, last: lastName}}},
      	callback
  	);
}


/*
  Method to update username.
 */
exports.setUsernameById = function(id, newUsername, callback) {
  	User.findByIdAndUpdate(
   		id,
      	{$set: {username : newUsername}},
      	callback
  	);
}


exports.testuser = function() {
	console.log("testing");
}
