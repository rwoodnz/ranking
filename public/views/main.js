var build = require("./build.js")

$('body').html(require('fs').readFileSync(__dirname + '/container.html', 'utf8'))
$('navbar').html(require('fs').readFileSync(__dirname + '/navbar.html', 'utf8'))

build({attachTo:'login', viewModel:require("./login.js"),  template: require('fs').readFileSync(__dirname + '/login.html', 'utf8')})
build({attachTo:'register', viewModel:require("./register.js"),  template: require('fs').readFileSync(__dirname + '/register.html', 'utf8')})
ko.applyBindings();
