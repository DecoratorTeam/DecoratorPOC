var express = require('express');
var router = express.Router();
var products = require('../Models/Products');

//Get All Products
router.get('/GetAllProducts',function(req,res){
    products.getAllProducts(function(err,products){
		if (err) 
			res.send(err);
		else
       res.send(products);            
	});
});

//GetProductById
router.get('/GetProductById/:productID',function(req,res) {
    products.getProductById(req.params.productID,function(err,products){
        console.log(req.params.productID);
          if(err)
          {
            console.log(err);
          }          
          res.json(products);
     });
 });

 //Getproductsbycategorybyid
router.get('/GetProductsByCategoryId/:categoryID',function(req,res){         
  products.getProductsByCategoryId(req.params.categoryID,function(err,product){
  if (err)    
    res.send(err);
  else
          res.send(product);            
    });
});

//GetProductAImagesByProductID
router.get('/GetProductAndImagesByProductID/:productID',function(req,res){
  products.getProductAndImagesByProductID(req.params.productID,function(err,product){
    if (err)    
    res.send(err);
  else
        res.send(product);            
    });
});

module.exports = router;