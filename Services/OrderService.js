var express = require('express');
var router = express.Router();
var orders = require('../Models/Orders');

//Get All orders
router.get('/GetAllOrders',function(req,res){
    orders.getAllOrders(function(err,orders){
		if (err) 
			res.send(err);
		else
			res.send(orders);        
	});
});

//GetOrderById
router.get('/GetOrderById/:orderID',function(req,res) {
    orders.getOrderById(req.params.orderID,function(err,orders){
        console.log(req.params.orderID);
          if(err)
          {
            console.log(err);
          }          
          res.json(orders);
     });
 });

 module.exports = router;