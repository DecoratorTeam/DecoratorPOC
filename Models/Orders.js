var mongoose = require('mongoose');
var db = mongoose.connection;
var ordersSchema = mongoose.Schema({
	orderID:{
		type:Number,
		required:true
	},
	productID:{
		type:String,
		required:true
	},
	date:{
		type:String,
		required:true
	},
	status:{
		type:Number,
		required:true
	}
});
var orders = module.exports = mongoose.model('orders',ordersSchema);
module.exports.getAllOrders = function(callback){
	orders.find(callback);
}
 module.exports.getOrderById = function(orderID,callback){        
	  mongoose.connection.db.eval('GetOrdersByID('+ orderID +')',callback);
 }