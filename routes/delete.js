let express= require('express');
let Employee= require('../model/index');//connect to schema in views folder
let router= express.Router();

//for deleting data
router.delete("/employee/:id", (req,res) =>{
	console.log("deleting employee");
	Employee.findOneAndRemove({
		_id:req.params.id
		},function(err,emp){
		if(err) {
			console.log('error occured in deleting');
		}
		else {
			console.log(emp);
			res.send('delete successfully');
		}});
	});
module.exports= router;