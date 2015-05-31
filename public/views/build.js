var build = function(args) {
    
    var viewModel = args.viewModel; //ko.components.register requires a var for the viewModel
      
    ko.components.register(args.attachTo, 
    {
        viewModel: viewModel(),
        template: args.template
    });
return viewModel;    
}

module.exports = build;
