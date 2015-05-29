var navbar = function(args) {
    
    ko.components.register(args.attachTo, 
    {
        template: require('fs').readFileSync(__dirname + '/navbar.html', 'utf8')
    });
    
}

module.exports = navbar;

