var React = require('react')

var Logout = React.createClass({
	handleLogout: function () {
		this.props.clearUserName();
		this.props.showMessage('Logged out', 4000)
		$.get("/logout");
	},

	render: function () {
		return (
			<span className="logout" >
				<span className="form-control">
					{this.props.user}
				</span>
				<button onClick={this.handleLogout} className='btn btn-sm'>Logout</button>
			</span>
		)
	}
});

module.exports = Logout;