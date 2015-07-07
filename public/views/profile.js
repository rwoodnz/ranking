var React = require('react')

var Profile = React.createClass({
	handlesubmit: function(e) {
		e.preventDefault();
		return
	},

	render: function () {
		return (
			<div className="jumbotron">
				<form onSubmit={this.handleSubmit}>
					<div className="form-group">
						<label htmlFor="username">Username</label>
						<input type='text' className="form-entry form-control" ref="username" placeholder='Username' autofocus />
					</div>
					<div className="form-group">
						<label htmlFor="password">Password</label>
						<input type='password' className="form-entry form-control" ref="password" placeholder='Password'/>
					</div>
					<div className="form-group">
						<label htmlFor="firstname">First name</label>
						<input type='text' className="form-entry form-control" ref="firstname" placeholder='First Name'/>
					</div>
					<div className="form-group">
						<label htmlFor="lastname">Last name</label>
						<input type='text' className="form-entry form-control" ref="lastname" placeholder='Last Name'/>
					</div>
					<div className="form-group">
						<label htmlFor="email">Email address</label>
						<input type='email' className="form-entry form-control" ref="email" placeholder='Email'/>
					</div>
					<div className="form-group">
						<button type='submit' className='btn btn-sm'>Save</button>
					</div>
					<div className="text-warning left-margin-10 top-margin-10" ></div>
				</form>
			</div>
		)
	}
});

module.exports = Profile;