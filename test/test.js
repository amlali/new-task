
var expect = require('chai').expect;

var request = require('superagent');

var agent = request.agent();
var host = 'http://localhost:3000';

var help = require('../test/helper');






 describe("create new user", function() {
 
 it("should return true", function(done) {
            let user=help.generateUser();
            user.username="wafaagamal",
            user.mobilenumber=01095606675,
            user.email="wafaagamal25@gmail.com",
            user.password="wafaa123456789"



            agent
            .post(host+'/signUp')
            .send(user)
            .end(function (err, res) {
              if(err) done(err);
                expect(res.status).to.equal(200);
                done();
                
            });
     });

	it("should return error using invalid username", function(done) {
			let user=help.generateUser();
           	user.username = user.username+"#";
            agent
            .post(host+'/signUp')
            .send(user)
            .end(function (err, res) {
              
                expect(res.status).to.equal(400);
                done();
                
            });
     });
it("should return error using invalid Short username", function(done) {
			let user=help.generateUser();
           	user.username = help.generate('lalpha',2);
            agent
            .post(host+'/signUp')
            .send(user)
            .end(function (err, res) {
              
                expect(res.status).to.equal(400);
                done();
                
            });
     });
	it("should return error using missing username", function(done) {
			let user=help.generateUser();
			user.username = undefined;
            agent
            .post(host+'/signUp')
            .send(user)
            .end(function (err, res) {
                expect(res.status).to.equal(400);
                done();
                
            });
    });

	it("should return error using Long username", function(done) {
			let user=help.generateUser();
			user.username =help.generate('mix',50);
            agent
            .post(host+'/signUp')
            .send(user)
            .end(function (err, res) {
                expect(res.status).to.equal(400);
                done();
                
            });
    });
 
	it("should return error invalid Mail", function(done) {

			let user=help.generateUser();
			user.email=help.generate('lalpha',20)+"gmail.com";

	            agent
	            .post(host+'/signUp')
	            .send(user)
	            .end(function (err, res) {
	            
	                expect(res.status).to.equal(400);
	                done();
	                
	            });
	       });
	it("should return error invalid Mail", function(done) {

			let user=help.generateUser();
			user.email=undefined;

	            agent
	            .post(host+'/signUp')
	            .send(user)
	            .end(function (err, res) {
	            
	                expect(res.status).to.equal(400);
	                done();
	                
	            });
	       });

it("should return error invalid Mail", function(done) {

			let user=help.generateUser();
			user.email=help.generate('numeric',5)+"@gmail.com";

	            agent
	            .post(host+'/signUp')
	            .send(user)
	            .end(function (err, res) {
	            
	                expect(res.status).to.equal(400);
	                done();
	                
	            });
	       });

	it("should return error invalid Mobile", function(done) {

        let user=help.generateUser();
        user.mobilenumber=help.generate('numeric',25) ;

	            agent
	            .post(host+'/signUp')
	            .send(user)
	            .end(function (err, res) {
	                //if (err) done(err);
	                expect(res.status).to.equal(400);
	                done();
	              
	            });
	       });
   
    it("should return error invalid Long password", function(done) {
       let user=help.generateUser(); 
       user.password=help.generate('mix',80) ;

	            agent
	            .post(host+'/signUp')
	            .send(user)
	            .end(function (err, res) {
	                //if (err) done(err);
	                expect(res.status).to.equal(400);
	                done();
	                
	            });
	       }); 
    it("should return error invalid  Short password", function(done) {
       let user=help.generateUser(); 
       user.password=help.generate('mix',5)  ;

	            agent
	            .post(host+'/signUp')
	            .send(user)
	            .end(function (err, res) {
	                //if (err) done(err);
	                expect(res.status).to.equal(400);
	                done();
	                
	            });
	       });

    it("should return error missing password", function(done) {
       let user=help.generateUser(); 
       user.password=undefined ;

	            agent
	            .post(host+'/signUp')
	            .send(user)
	            .end(function (err, res) {
	                //if (err) done(err);
	                expect(res.status).to.equal(400);
	                done();
	                
	            });
	       });

});

describe("create sign in  user", function() {

    it("should return error missing email ", function(done) {
            let user=help.signInUser();
            user.email=undefined;
            agent
            .post(host+'/signIn')
            .send(user)
            .end(function (err, res) {
               
                expect(res.status).to.equal(400);
                done();
                
            });
       });
    it("should return error invalid email ", function(done) {
            let user=help.signInUser();
            user.email=help.generate('lalpha',20)+"gmail.com";
            agent
            .post(host+'/signIn')
            .send(user)
            .end(function (err, res) {
               
                expect(res.status).to.equal(400);
                done();
                
            });
       });
    it("should return error invalid Long password", function(done) {
       let user=help.signInUser(); 
       user.password=help.generate('mix',80) ;

                agent
                .post(host+'/signIn')
                .send(user)
                .end(function (err, res) {
                    //if (err) done(err);
                    expect(res.status).to.equal(400);
                    done();
                    
                });
           }); 
    it("should return error invalid  Short password", function(done) {
       let user=help.signInUser(); 
       user.password=help.generate('mix',5)  ;

                agent
                .post(host+'/signIn')
                .send(user)
                .end(function (err, res) {
                    //if (err) done(err);
                    expect(res.status).to.equal(400);
                    done();
                    
                });
           });

    it("should return error missing password", function(done) {
       let user=help.signInUser(); 
       user.password=undefined ;

                agent
                .post(host+'/signIn')
                .send(user)
                .end(function (err, res) {
                    //if (err) done(err);
                    expect(res.status).to.equal(400);
                    done();
                    
                });
           });
 });
 /*describe ("create New  Form",function(){
     
  
        it("Test for Form should be true ", function(done) {
			let form=help.generateForm();

            agent
            .post(host+'/form')
            .send(form)
            .end(function (err, res) {
                if (err) done(err);
                expect(res.status).to.equal(200);
                done();
                
            });
       });
        it("should return error invalid no.ofClasses  ", function(done) {
       
			let form=help.generateForm();
			form.No_ofClasses=help.generate('numeric',200);

            agent
            .post(host+'/form')
            .send(form)
            .end(function (err, res) {
         
                expect(res.status).to.equal(400);
                done();
                
            });
       });
        it("should return error invalid no.ofStudentes ", function(done) {
         
	  
			let form=help.generateForm();
			form.studentNumber=help.generate('numeric',800) ;

            agent
            .post(host+'/form')
            .send(form)
            .end(function (err, res) {
         
                expect(res.status).to.equal(400);
                done();
                
            });
       });
 it("should return error invalid State ", function(done) {
 
			let form=help.generateForm();
            form.state='good';

            agent
            .post(host+'/form')
            .send(form)
            .end(function (err, res) {
         
                expect(res.status).to.equal(400);
                done();
                
            });
       });
 it("should return error invalid Date ", function(done) {
	       
		   let form=help.generateForm();
           form.visitDate=help.check_Date();

            agent
            .post(host+'/form')
            .send(form)
            .end(function (err, res) {
         
                expect(res.status).to.equal(400);
                done();
                
            });
       });

 });*/


