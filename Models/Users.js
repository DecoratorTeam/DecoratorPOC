var mongoose = require('mongoose');
var usersSchema = mongoose.Schema({
	name:{
		type:String,
		required:true
	},
	roles:{
		type:String,
		required:true
	},
	createdDate:{
		type:String,
		required:true
	},
	status:{
		type:String,
		required:true
	}
});
var users = module.exports = mongoose.model('users',usersSchema);

module.exports.getAllUsers = function(callback){
    users.find(callback);
}