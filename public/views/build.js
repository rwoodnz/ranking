var build = function(args) {
    
    if(args.viewModel == null) {
        //ko.components.register caused problems when no viewModel so load directly
        $(args.attachTo).html(args.template);
        
    } else {
        var viewModel = args.viewModel; //ko.components.register requires a var for the viewModel
        
        ko.components.register(args.attachTo, 
        {
            viewModel: viewModel(),
            template: args.template
        });
        ko.applyBindings(viewModel, document.getElementsByTagName(args.attachTo)[0]);
    }
    
return viewModel;    
}

module.exports = build;
