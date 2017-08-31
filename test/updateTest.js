let express= require('express');
let request = require('supertest');
let expect = require('chai').should();
let sinon= require('sinon');
let emp= require('../model/index');
//let modelStub= sinon.stub(emp,'update');
let app= require('../app.js');
//let server= request.agent('http://localhost:3000')

let updateStub = sinon.stub(emp, 'update')
describe('testing update method', function() {
   before(function() {
       updateStub.withArgs({ '_id': 'abcd' }, { $set: {'id':103, 'name':'nikky'}})
           .yields(null, {
               "ok": 1,
               "nModified": 1,
               "n": 1
           })
   })
   it('should respond with json', function(done) {
       console.log('inside update')
       request(app)
           .put('/employee/abcd')
           .send({'id':103, 'name':'nikky'})
           .end(function(err, res) {
               if (err) return done(err);
               expect(res.body.ok).to.be.equal(2);
               
           })
           done();
   })
})

/*describe('putting my Employee', ()=> {
	
			before(()=>{ 
			 modelStub.withArgs({'_id':111},{$set:{'id':103, 'name':'nikky'}})
			.yields(null,{'hii':1})
		})
			it('route should be updating', (done)=> {
		request(app)
		.put("/employee/111")
		.expect(200)
		.send({'id':113, 'name':'nishtha'})
    		.end(function(err,res) {
			if (err) done(err);
      expect((res.body.hii).to.be.equal(11))
		});	done();
	});		
});
*/

