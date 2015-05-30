var register = function(args) {
    
    //ViewModel
    var registerViewModel = function() {
        var vm = this;
        vm.username = ko.observable(username());
        vm.password = ko.observable(password());
        vm.email = ko.observable();
        vm.firstName = ko.observable();
        vm.lastName = ko.observable();
        vm.registrationVisible = ko.observable(false);
        
        vm.cancelRegistration = function() {
            registrationVisible(false);
            $('.collapse').collapse('show')
        }
        
        vm.setupRegistration = function() {
            registrationVisible(true)
            $('.collapse').collapse('hide')
        }
    }

    //Template
    var fs = require('fs');
    var registerTemplate = fs.readFileSync(__dirname + '/register.html', 'utf8');
   
    //Bind   
    ko.components.register(args.attachTo, 
    {
        viewModel: registerViewModel(),
        template: registerTemplate
    });
    
}

module.exports = register;
