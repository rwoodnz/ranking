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
