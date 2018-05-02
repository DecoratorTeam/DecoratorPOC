var mongoose = require('mongoose');
var db = mongoose.connection;
var productsSchema = mongoose.Schema({
	productID:{
		type:Number,
		required:true
	},
	productName:{
		type:String,
		required:true
	},
	productCode:{
		type:String,
		required:true
	},
	productDescription:{
		type:String,
		required:true
	},
	categoryID:{
		type:Number,
		required:true
	},
	size:{
		type:String,
		required:true
	},
	msrp:{
		type:String,
		required:true
	},
	map:{
		type:String,
		required:true
	},
	colour:{
		type:String,
		required:true
	},
	createdDate:{
		type:String,
		required:true
	},
	modifiedDate:{
		type:String,
		required:true
	},
	status:{
		type:Number,
		required:true
	},
	productImage:{
		type:String,
		required:true
	}	
});
var products = module.exports = mongoose.model('products',productsSchema);

module.exports.getAllProducts = function(callback){        
	  mongoose.connection.db.eval('GetAllProducts()',callback);
  }
  
  module.exports.getProductById = function(productID,callback){        
	  mongoose.connection.db.eval('GetProductByID('+ productID +')',callback);
  }

  module.exports.getProductsByCategoryId = function(productID,callback){
    mongoose.connection.db.eval('GetproductByCatergoryID('+ productID +')',callback);
  }

  module.exports.getProductAndImagesByProductID = function(productID,callback){
	mongoose.connection.db.eval('GetProductAndImagesByProductID('+ productID +')',callback);
  }

