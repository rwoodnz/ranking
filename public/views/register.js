var React = require('react')

var Register = React.createClass({
	
	handleSubmit: function(e) {
		e.preventDefault()
		var postData = {
			username: React.findDOMNode(this.refs.username).value.trim(),
	    	password: React.findDOMNode(this.refs.password).value.trim(),
			firstname: React.findDOMNode(this.refs.firstname).value.trim(),
	    	lastname: React.findDOMNode(this.refs.lastname).value.trim(),
			email: React.findDOMNode(this.refs.email).value.trim()
		}
		this.postToServer(postData, this.props.showMessage)
	},

	postToServer: function(postData, showMessage) {
		var that = this;
		$.post( "/register", postData)
		.done(function(response) 
        {
			showMessage('Registration succeeded', 2000)
			that.props.closeProfile();
        })
		.fail(function(response) {
            if(response.status === 401) 
            {
                showMessage('Registration failed', 4000);
            }
        });
	},
	
	render: function () {
		return (
			<div className="jumbotron">
				<form onSubmit={this.handleSubmit}>
					<div className="form-group">
						<label htmlFor="username">Username</label>
						<input type='text' className="form-entry form-control" ref="username" placeholder='Username (required)' required autofocus />
					</div>
					<div className="form-group">
						<label htmlFor="password">Password</label>
						<input type='password' className="form-entry form-control" ref="password" placeholder='Password (required)' required />
					</div>
					<div className="form-group">
						<label htmlFor="firstname">First name</label>
						<input type='text' className="form-entry form-control" ref="firstname" placeholder='First Name (required)' required />
					</div>
					<div className="form-group">
						<label htmlFor="lastname">Last name</label>
						<input type='text' className="form-entry form-control" ref="lastname" placeholder='Last Name (required)' required />
					</div>
					<div className="form-group">
						<label htmlFor="email">Email address</label>
						<input type='email' className="form-entry form-control" ref="email" placeholder='Email (required)' required />
					</div>
					<div className="form-group">
						<button type='submit' className='btn btn-sm'>Save</button>
					</div>
				</form>
			</div>
		)
	}
});

module.exports = Register;