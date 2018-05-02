var express = require('express');
var router = express.Router();
var productimages = require('../Models/ProductImages');

//Get All ProductImages
router.get('/GetAllProductImages',function(req,res){
    productimages.getAllProductImages(function(err,productimages){
		if (err) 
			res.send(err);
		else
       res.send(productimages);            
	});
});

//Getproductsbycategorybyid
router.get('/GetProductImagesByProductId/:productID',function(req,res){         
    productimages.getProductImagesByProductId(req.params.productID,function(err,product){
    if (err)    
      res.send(err);
    else
      res.send(product);            
      });
  });

  module.exports = router;