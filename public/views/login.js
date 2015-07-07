var React = require('react')

var Login = React.createClass({

	handleSubmit: function(e) {
	    e.preventDefault();
	    var username = React.findDOMNode(this.refs.username).value.trim();
	    var password = React.findDOMNode(this.refs.password).value.trim();
	    if (!username || !password) {
			this.props.showMessage('Oops! Enter both username and password', 2000);
	      	return;
	    }
	    this.loginToServer(username, password, this.props.showMessage, this.props.setUserName)
	    React.findDOMNode(this.refs.username).value = '';
	    React.findDOMNode(this.refs.password).value = '';
	    return;
	},
	
	loginToServer: function(username, password, showMessage, setUserName) {
		var that = this;
		$.post( "/login",
          { username: username, password: password }
        ).done(function( response ) 
        {
			setUserName(username);
			showMessage('Login succeeded', 2000)
        }).fail(function(response) {
            if(response.status === 401) 
            {
                showMessage('Login failed', 4000);
            }
        });
	},

	render: function () {
		
		return (
			<span>
			    <form className="loginForm" onSubmit={this.handleSubmit}>
					<input className="form-entry form-control" 
							ref="username"
							placeholder="Username" 
							autofocus />
					<input className="form-entry form-control" 
							ref="password"
							type='password' 
							placeholder="Password" />
					<span className="navbar-right">
					<button type='submit' className='btn btn-sm'>Login</button>
					{'\u00A0'}or 
					<button type='button' className='btn btn-sm' onClick={this.props.openProfile}>Register</button>
					</span>
				</form>
			</span>
		)
	}
});

module.exports = Login;