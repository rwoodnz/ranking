var express = require('express');
var router = express.Router();

var isAuthenticated = function (req, res, next) {
	// if user is authenticated in the session, call the next() to call the next request handler 
	// Passport adds this method to request object. A middleware is allowed to add properties to
	// request and response objects
	if (req.isAuthenticated())
		return next();
	// if the user is not authenticated then redirect him to the login page
	res.redirect('/');
}

module.exports = function(passport){

	/* GET the single app page. */
	router.get('/', function(req, res) {
    	res.render('index', { message: req.flash('message') });
	});

	/* Handle Login POST */
	router.post('/login', passport.authenticate('login', {
		successRedirect: '/home',
		failureRedirect: '/authenticationfail',
		failureFlash : true  
	}));

//	/* GET Registration Page */ probably not needed
//	router.get('/signup', function(req, res){
//		res.render('pages/register',{message: req.flash('message')});
//	});
//
	/* Handle Registration POST */
	router.post('/register', passport.authenticate('signup', {
		successRedirect: '/home',
		failureRedirect: '/authenticationfail',
		failureFlash : true  
	}));

	/* Handle failed authentication */
	router.get('/authenticationfail', function(req, res){
		res.sendStatus(401);
	})

	/* GET Home Page */
	router.get('/home', isAuthenticated, function(req, res){
		res.sendStatus(200);
	});

	/* Handle Logout */
	router.get('/logout', function(req, res) {
		req.logout();
	});

	return router;
}
