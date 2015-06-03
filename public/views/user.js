var userViewModel = function() 
{
    var vm = this;
    vm.userUsername = ko.observable(); 
    vm.userPassword = ko.observable();
    vm.userEmail = ko.observable();
    vm.userFirstName = ko.observable();
    vm.userLastName = ko.observable();
    vm.userMessage = ko.observable();
    vm.userVisible = ko.observable(false);
        
    vm.openUser = function() {
        userVisible(true)
        $('.collapse').collapse('hide')
    }
    
    vm.closeUser = function() {
        vm.userVisible(false);
        $('.collapse').collapse('show')
    } 
           
    vm.setSetuserMessage = function(message, timeToShow, callback) {
        vm.userMessage(message);
        setTimeout(function() {
            vm.userMessage('');
            if(callback != null) callback();
        }, timeToShow);
    }
    
    // eventually implement to replace registration viewmodel and template
    vm.addUser = function() {
        $.post( "/register",
          { username: vm.userUsername(), 
            password: vm.userPassword(),
            email: vm.userEmail(),
            firstname: vm.userFirstName(),
            lastName: vm.userLastName()
          }
        ).done(function( response ) 
        {
            vm.setRegistrationMessage('Registration successful', 2000, function() {
                loggedIn(true);
                vm.userPassword('');
                username(vm.userUsername())
                vm.closeUser();
            });

        }).fail(function(response) {
            if(response.status === 401) 
            {
                vm.setuserMessage('Registration failed', 4000);
            }
        });
    }
    
    // implement for loading a user to edit
    vm.editUser = function() {
        //$.get("/getuser")
        //load results into view model
    }
    
    //Implement for saving an edited a user
     vm.saveUser = function() {
        $.post( "/saveuser",
          { username: vm.userUsername(), 
            password: vm.userPassword(),
            email: vm.userEmail(),
            firstname: vm.userFirstName(),
            lastName: vm.userLastName()
          }
        ).done(function( response ) 
        {
            vm.setuserMessage('user saved', 2000, function() {
                vm.userPassword('');
                closeUser();
            });

        }).fail(function(response) {
            if(response.status === 401) 
            {
                vm.setuserMessage('user save failed', 4000);
            }
        });
    }
    
}

module.exports = userViewModel;
