var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var courseSchema = new Schema({
	course: String
});

module.exports = mongoose.model('Course', courseSchema, 'course');