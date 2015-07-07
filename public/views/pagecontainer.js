var React = require('react')
var NavBar = require('./navbar.js')
var Profile = require('./profile.js')

var PageContainer = React.createClass({
  	getInitialState: function() {
    	return {user: null, registrationOpen: false};
  	},
    
    setUserName: function (username) {
        this.setState({user: username});
    },
    
    clearUserName: function() {
        this.setState({user: null});
    },
    
  	openProfile: function (e) {
  		this.setState({registrationOpen: true})
  	},
    
    closeProfile: function(e) {
      this.setState({registrationOpen: false})
    },
	
  	render: function () {
    		return (
            <span>
          			<NavBar 
                    user={this.state.user}
                    setUserName={this.setUserName}
                    clearUserName={this.clearUserName}
                    openProfile={this.openProfile}
                    closeProfile={this.closeProfile}
                    registrationOpen={this.state.registrationOpen}
                />
                {this.state.registrationOpen
                ?
                    <Profile 
                        user={null}
                    />        
                : 
                  ''   
                }
            </span>
    		)
  	}
});

module.exports = PageContainer;