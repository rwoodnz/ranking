var registerViewModel = function() 
{
    var vm = this;
    vm.username = ko.observable(username());
    vm.password = ko.observable(password());
    vm.email = ko.observable();
    vm.firstName = ko.observable();
    vm.lastName = ko.observable();
}

module.exports = registerViewModel;
