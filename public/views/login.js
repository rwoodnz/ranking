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
    var fs = require('fs');
    var loginTemplate = fs.readFileSync(__dirname + '/login.html', 'utf8');
   
    //Bind   
    ko.components.register(args.attachTo, 
    {
        viewModel: loginViewModel("",""),
        template: loginTemplate
    });

}

module.exports = login;