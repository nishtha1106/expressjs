let express= require('express');
let app= express();
let path= require('path');
let bodyParser= require('body-parser');
let Employee= require('./model/index');//connect to schema in views folder


app.use(bodyParser.json());// body parser middleware
app.use(bodyParser.urlencoded({extended:false}));// keeps the log or track of server
let mongoose=require('mongoose');// for database connection
let myDB= 'mongodb://localhost/company';
mongoose.connect(myDB);
let logger =function(req, res, next) {
	console.log("logging... ");
	next();
}
app.use(logger);
let create = require('./routes/create');
let retrieve = require('./routes/retrieve');
let update = require('./routes/update');
let deletes = require('./routes/delete');
app.use('/',create);
app.use('/',retrieve);
app.use('/',update);
app.use('/',deletes);
app.use(bodyParser.json())
app.use(bodyParser.urlencoded( {
	extended:true
}))

app.set('view engine', 'jade');//view engine
app.set('views', path.join(__dirname,'views'));

app.use(express.static(path.join(__dirname,'public')));// create path for static files in public folder

app.get('/', function(req, res) {
	res.render('index', {
	title:'student',name:'nishtha'
});
});

app.listen(3000,function() {
	console.log('port 3000 listening')
})
module.exports=app;