(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
require("./navbar.js")({attachTo: 'body'});
require("./login.js")({attachTo:'login'});

ko.applyBindings();

},{"./login.js":2,"./navbar.js":3}],2:[function(require,module,exports){
var login = function(args) {

    //Model
    var loginViewModel = function(username, password) 
    {
        this.username = ko.observable(username);
        this.password = ko.observable(password);
        this.fullName = ko.pureComputed(function() {
            return this.username();
        }, this);
    };
    
    //Template
    
    var loginTemplate = "<p>Username: <input data-bind=\"value: username\" /></p>\n<p>Password: <input type='password' data-bind=\"value: password\" /></p>\n<h2>Hello, <span data-bind=\"text: fullName\"> </span>!</h2>\n";
   
    //Bind   
    ko.components.register(args.attachTo, 
    {
        viewModel: loginViewModel("",""),
        template: loginTemplate
    });

}

module.exports = login;
},{}],3:[function(require,module,exports){
var navbar = function(args) {
       
    var navbarViewModel = function() {}
    
    ko.components.register(args.attachTo, 
    {
        viewModel: navbarViewModel,
        template: "<navbar class=\"navbar navbar-default\" role=\"navigation\">\n    <div class=\"container\">\n            <a class=\"brand\" href=\"/home\"></a>\n                <login>\n                    \n                </login>         \n    </div>\n</navbar>\n\n\n"
    });

}

module.exports = navbar;


},{}]},{},[1]);
