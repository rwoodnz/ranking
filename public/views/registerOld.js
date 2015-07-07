var registerViewModel = function() 
{
    var vm = this;
    vm.registrationUsername = ko.observable(); 
    vm.registrationPassword = ko.observable();
    vm.email = ko.observable();
    vm.firstName = ko.observable();
    vm.lastName = ko.observable();
    vm.registrationMessage = ko.observable();
    vm.registrationVisible = ko.observable(false);
   
   // if passed a login view model then subscribe to registerSelected     
    registerSelected.subscribe(function(value) {
        $('.collapse').collapse(value ? 'hide': 'show')
    })
           
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
