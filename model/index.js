let mongoose=require('mongoose');
let Schema = mongoose.Schema;
let CompanySchema= new Schema({
	id : Number,
	name: String
})
module.exports= mongoose.model( 'Employee', CompanySchema)