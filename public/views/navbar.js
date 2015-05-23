var navbar = function(args) {
       
    var navbarViewModel = function() {}
    
    ko.components.register(args.attachTo, 
    {
        viewModel: navbarViewModel,
        template: require('fs').readFileSync(__dirname + '/navbar.html', 'utf8')
    });

}

module.exports = navbar;

