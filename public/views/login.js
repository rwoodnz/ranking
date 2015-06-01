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
        vm.username("");
        vm.password("");
        $.get("/logout");
    }

};

module.exports = loginViewModel;