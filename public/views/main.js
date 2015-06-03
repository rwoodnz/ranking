var build = require("./build.js")
var fs = require("fs")

build({
	attachTo:'body', 
	viewModel:null, 
	template: fs.readFileSync(__dirname + '/container.html', 'utf8')
	})
build({
	attachTo:'navbar', 
	viewModel:null, 
	template: fs.readFileSync(__dirname + '/navbar.html', 'utf8')
	})
build({
	attachTo:'login', 
	viewModel:require("./login.js"),  
	template: fs.readFileSync(__dirname + '/login.html', 'utf8')
	})
build({
	attachTo:'register', 
	viewModel:require("./register.js"),  
	template: fs.readFileSync(__dirname + '/register.html', 'utf8')
	})
build({
	attachTo:'user', 
	viewModel:require("./user.js"),  
	template: fs.readFileSync(__dirname + '/user.html', 'utf8')
	})
	
	
