var login = function(args) {

    //Model
    var loginViewModel = function(username, password) 
    {
        var vm = this;
        vm.username = ko.observable();
        vm.password = ko.observable();
        vm.loginMessage = ko.observable();
        vm.loggedIn = ko.observable(false);
        
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

        vm.register = function() {
            setupRegistration();
        }
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