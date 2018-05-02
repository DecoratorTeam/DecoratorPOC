var mongoose = require('mongoose');
var db = mongoose.connection;
var productimageSchema = mongoose.Schema({
	productimageID:{
		type:Number,
		required:true
	},
	productID:{
		type:String,
		required:true
	},
	ImageURL:{
		type:String,
		required:true
	}	
});
var productimages = module.exports = mongoose.model('product_images',productimageSchema);

module.exports.getAllProductImages = function(callback){
    productimages.find(callback);
}

module.exports.getProductImagesByProductId = function(productID,callback){
    mongoose.connection.db.eval('GetProductImagesByProductID('+ productID +')',callback);
  }
