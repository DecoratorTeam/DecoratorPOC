var express = require('express');
var router = express.Router();
var users = require('../Models/Users');

//Get All Users
router.get('/GetAllUsers',function(req,res){
    users.getAllUsers(function(err,users){
		if (err) 
			res.send(err);
		else
            res.send(users);            
	});
});

module.exports = router;