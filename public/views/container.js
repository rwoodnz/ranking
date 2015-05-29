var container = function(args) {
    
    ko.components.register(args.attachTo, 
    {
        template: require('fs').readFileSync(__dirname + '/container.html', 'utf8')
    });
    
    ko.applyBindings();
}

module.exports = container;