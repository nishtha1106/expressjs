let express= require('express');
let Employee= require('../model/index');//connect to schema in views folder
let router= express.Router();

// for inserting data
router.post("/employee", (req,res) =>{
	console.log("posting all employees");
	var newEmployee= new Employee();
	newEmployee.id= req.body.id;
	newEmployee.name=req.body.name;

	newEmployee.save(function(err,emp){
		if(err) {
			res.send('error occured in inserting');
		}
		else {
			console.log(emp);
			res.send(emp);
		}
	});
});
module.exports= router;