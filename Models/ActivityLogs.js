var mongoose = require('mongoose');
var activityLogSchema = mongoose.Schema({
	name:{
		type:String,
		required:true
	},
	no:{
		type:String,
		required:true
	}
});
var activityLogs = module.exports = mongoose.model('activity_logs',activityLogSchema);

module.exports.getAllActivityLogs = function(callback){
    activityLogs.find(callback);
}