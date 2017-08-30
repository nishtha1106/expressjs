let express= require('express');
let supertest = require('supertest');
let expect = require('chai').expect;
let app= require('../app.js');
let sinon= require('sinon');
let emp= require('../model/index');
let modelStub= sinon.stub(emp,'find')
let server= supertest.agent('http://localhost:3000')

describe('Getting Employee', ()=> {
	it('route should be getting', (done)=> {
		modelStub.yields(null,[{name:"xyz",id:101}])
		supertest(app)
		.get("/employee")
		//.expect('Content-Type',/json/)
		.end(function(err,res) {
			if(err) return done(err);
			expect(res.body[0].name).to.be.equal("xyz");
			expect(res.body[0].id).to.be.equal(101);
			done();
		});
	});
});