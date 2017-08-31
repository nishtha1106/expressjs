let express= require('express');
let Employee= require('../model/index');//connect to schema in views folder
let router= express.Router();

//for updating data
router.put("/employee/:id", (req,res) =>{
	console.log("updating employee");
	Employee.update({
		_id:req.params.id
		},
		{$set:{ name:req.body.name, id:req.body.id}},
		{upsert:true},
	function(err,emp){
		if(err) {
			console.log('error occured in updating');
		}
		else {
			console.log(emp);
			res.send('update successfully');
		}});
	});
module.exports= router;