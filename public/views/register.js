var registerViewModel = function() 
{
    var vm = this;
    // getting interference with login component
    vm.registrationUsername = ko.observable(); 
    vm.registrationPassword = ko.observable();
    vm.email = ko.observable();
    vm.firstName = ko.observable();
    vm.lastName = ko.observable();
    vm.registrationMessage = ko.observable();
    vm.registrationVisible = ko.observable(false);
        
    vm.setupRegistration = function() {
        registrationVisible(true)
        $('.collapse').collapse('hide')
    }
    
    vm.cancelRegistration = function() {
        registrationVisible(false);
        $('.collapse').collapse('show')
    } 
           
    vm.setRegistrationMessage = function(message, timeToShow, callback) {
        vm.registrationMessage(message);
        setTimeout(function() {
            vm.registrationMessage('');
            if(callback != null) callback();
        }, timeToShow);
    }
    
    vm.save = function() {
        $.post( "/register",
          { username: vm.registrationUsername(), 
            password: vm.registrationPassword(),
            email: vm.email(),
            firstname: vm.firstName(),
            lastName: vm.lastName()
          }
        ).done(function( response ) 
        {
            vm.setRegistrationMessage('Registration succeeded', 2000, function() {
                loggedIn(true);
                vm.registrationPassword('');
                username(vm.registrationUsername())
                cancelRegistration();
            });

        }).fail(function(response) {
            if(response.status === 401) 
            {
                vm.setRegistrationMessage('Registration failed', 4000);
            }
        });
    }
    
}

module.exports = registerViewModel;
