(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var build = require("./build.js")


build({
	attachTo:'body', 
	viewModel:null, 
	template: "<div id=\"main\">\n\t <navbar>\n\t </navbar>\n\t <register>\n\t </register>\n</div>\n"
	})
build({
	attachTo:'navbar', 
	viewModel:null, 
	template: "<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    \n    <!-- Mobile display -->\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\"\n              data-toggle=\"collapse\" data-target=\"#navbar-collapse-section\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"brand\" href=\"/\"></a>\n    </div>\n\n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class=\"collapse navbar-collapse\" id=\"navbar-collapse-section\">\n        <login></login>\n    </div><!-- /.navbar-collapse -->\n  </div><!-- /.container-fluid -->\n</nav>\n\n\n\n\n"
	})
build({
	attachTo:'login', 
	viewModel:require("./login.js"),  
	template: "\n<div class='pull-right login'> \n\t<div class=\"loginLine form-inline\" data-bind=\"visible: !registrationVisible()\">\n\t\t<span data-bind=\"visible: !loggedIn()\" >\n\t\t\t<input class=\"form-entry form-control\" \n\t\t\t\t\tid=\"username\" \n\t\t\t\t\tdata-bind=\"textInput: username\" \n\t\t\t\t\tplaceholder=\"Username\" \n\t\t\t\t\tautofocus />\n\t\t\t<input class=\"form-entry form-control \" \n\t\t\t\t\ttype='password' \n\t\t\t\t\tdata-bind=\"textInput: password, event: {keyup: enterForLogin}\" \n\t\t\t\t\tplaceholder=\"Password\" />\n\t\t\t<span class=\"navbar-right\">\n\t\t\t\t<button class='btn btn-sm' data-bind=\"click: login\">Login</button>\n\t\t\t\tor <button class='btn btn-sm' data-bind=\"click: setupRegistration\">Register</button>\n\t\t\t</span>\n\t\t</span>\n\t\t<span class=\"logout\" data-bind=\"visible: loggedIn()\" >\n\t\t\t<span class=\"form-control\" data-bind=\"text: username\"></span>\n\t\t\t<button class='btn btn-sm' data-bind=\"click: logout\">Logout</button>\n\t\t</span>\n\t</div>\n\t<div class=\"loginLine form-inline\" data-bind=\"visible: registrationVisible()\">\n\t\t<button class='btn btn-sm' data-bind=\"click: cancelRegistration()\">Cancel registration</button>\n\t</div>\n\t<p class=\"text-warning left-margin-10 top-margin-10\" data-bind=\"text: loginMessage\"></p>\n</div>\t\n"
	})
build({
	attachTo:'register', 
	viewModel:require("./register.js"),  
	template: "<div class=\"jumbotron\" data-bind=\"visible: registrationVisible()\">\n\t<div>\n\t\t<div class=\"form-group\">\n\t\t\t<label for=\"username\">Username</label>\n\t\t\t<input type='text' class=\"form-entry form-control\" id=\"username\" data-bind='value: registrationUsername' placeholder='Username' />\n\t\t</div>\n\t\t<div class=\"form-group\">\n\t\t\t<label for=\"password\">Password</label>\n\t\t\t<input type='password' class=\"form-entry form-control\" id=\"password\" data-bind='value: registrationPassword' placeholder='Password'/>\n\t\t</div>\n\t\t<div class=\"form-group\">\n\t\t\t<label for=\"firstname\">First name</label>\n\t\t\t<input type='text' class=\"form-entry form-control\" id=\"firstname\" data-bind='value: firstName' placeholder='First Name'/>\n\t\t</div>\n\t\t<div class=\"form-group\">\n\t\t\t<label for=\"lastname\">Last name</label>\n\t\t\t<input type='text' class=\"form-entry form-control\" id=\"lastname\" data-bind='value: lastName' placeholder='Last Name'/>\n\t\t</div>\n\t\t<div class=\"form-group\">\n\t\t\t<label for=\"email\">Email address</label>\n\t\t\t<input type='email' class=\"form-entry form-control\" id=\"email\" data-bind='value: email' placeholder='Email'/>\n\t\t</div>\n\t\t<div class=\"form-group\">\n\t\t\t<button class='btn btn-sm' data-bind=\"click: save\">Save</button>\n\t\t</div>\n\t</ul>\n</div>"
	})

},{"./build.js":2,"./login.js":3,"./register.js":4}],2:[function(require,module,exports){
var build = function(args) {
    
    if(args.viewModel == null) {
        $(args.attachTo).html(args.template)
    } else {
        var viewModel = args.viewModel; //ko.components.register requires a var for the viewModel
        
        ko.components.register(args.attachTo, 
        {
            viewModel: viewModel(),
            template: args.template
        });
        ko.applyBindings(viewModel, document.getElementsByTagName(args.attachTo)[0]);
    }
    
return viewModel;    
}

module.exports = build;

},{}],3:[function(require,module,exports){
var loginViewModel = function() 
{
    var vm = this;
    vm.username = ko.observable();
    vm.password = ko.observable();
    vm.loginMessage = ko.observable();
    vm.loggedIn = ko.observable(false);
    vm.registrationVisible = ko.observable(false);
        
    vm.setupRegistration = function() {
        registrationVisible(true)
        $('.collapse').collapse('hide')
    }
    
    vm.cancelRegistration = function() {
        registrationVisible(false);
        $('.collapse').collapse('show')
    }
    
    vm.setLoginMessage = function(message, timeToShow, callback) {
        vm.loginMessage(message);
        setTimeout(function() {
            vm.loginMessage('');
            if(callback != null) callback();
        }, timeToShow);
    }
    
    vm.login = function() {
        $.post( "/login",
          { username: vm.username(), password: vm.password() }
        ).done(function( response ) 
        {
            vm.setLoginMessage('Login succeeded', 2000, function() {
                vm.loggedIn(true);
            });
            vm.password('');
        }).fail(function(response) {
            if(response.status === 401) 
            {
                vm.setLoginMessage('login failed', 4000);
            }
        });
    }
    
    vm.enterForLogin = function(data, event){
        if(event.keyCode == 13) { 
            vm.login();
        } else {
            return true;
        }
    }
    
    vm.logout = function() {
        vm.loggedIn(false);
        $.get("/logout");
    }

};

module.exports = loginViewModel;
},{}],4:[function(require,module,exports){
var registerViewModel = function() 
{
    var vm = this;
    // getting interference with login component
    vm.registrationUsername = ko.observable(); 
    vm.registrationPassword = ko.observable();
    vm.email = ko.observable();
    vm.firstName = ko.observable();
    vm.lastName = ko.observable();
    
    vm.save = function() {
        console.log('saving')
    }
}

module.exports = registerViewModel;

},{}]},{},[1]);
