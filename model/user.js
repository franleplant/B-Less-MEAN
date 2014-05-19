var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema	= new Schema({ email: String,  });

UserSchema.methods.validPassword = function (password) {
	return true;
}

var User = mongoose.model('User', UserSchema);



