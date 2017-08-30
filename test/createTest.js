let express = require('express')
let request = require('supertest');
let expect = require('chai').should();
let sinon = require('sinon')
let model = require('../model/index')
let app = require('../app.js')
let url =request.agent('http://localhost:3000')
describe('testing my post function',function(){
   it('it should create users',function(done){
       request(app)
    .post('/employee')
    .send({"id": 105, "name": 'nishtha'})
    .expect(200)
    //.expect('Content-Type', /json/)
    .end(function(err, res) {
      if (err) done(err);
      res.body.should.have.property('id', 105);
      res.body.should.have.property('name', 'nishtha');
      done();
    });
   })
})