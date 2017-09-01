let express= require('express');
let request = require('supertest');
let expect = require('chai').expect;
let sinon= require('sinon');
let emp= require('../model/index');
let modelStub= sinon.stub(emp,'update');
let app= require('../app.js');
//let server= request.agent('http://localhost:3000')
describe('testing update method', function() {
   before(()=> {
       modelStub.withArgs({ '_id': 'abcd' },{ $set: {'id':103, 'name':'nikky'}})
           .yields(null, {"ok": 1,"nModified": 1,"n": 1})
   })
   it('should respond with json', (done)=> {
       console.log('inside update')
       request(app)
           .put('/employee/abcd')
           .send({'id':103, 'name':'nikky'})
           .end(function(err, res) {
               if (err) return done(err);
               expect(res.body.ok).to.be.equal(1);
               done()
      })
   })
})
