var express = require('express');
var router = express.Router();
var activityLogs = require('../Models/ActivityLogs');

//Get Activity Logs
router.get('/GetActivityLogs',function(req,res){
    activityLogs.getAllActivityLogs(function(err,logs){
		if (err) 
			res.send(err);
		else
            res.send(logs);            
	});
});

module.exports = router;