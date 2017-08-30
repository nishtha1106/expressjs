let express= require('express');
let Employee= require('../model/index');//connect to schema in views folder
let router= express.Router();

//for retrieving data
router.get('/employee', (req,res) =>{
	console.log("getting all employees");
	Employee.find(function(err,emp){
		if(err) {
			res.send('error occured in retrieving');
		}
		else {
			console.log(emp);
			res.send(emp);
		}
	});
});
module.exports= router;