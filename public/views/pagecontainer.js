var React = require('react')
var NavBar = require('./navbar.js')
var Register = require('./register.js')

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
	
    showMessage: function (message, timeToShow) {
        var that = this;
        that.setState({message: message});
        setTimeout(function() {
            that.setState({message: ""});
        }, 4000);
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
                    <Register 
                        user={null}
                        showMessage={this.showMessage}
                        closeProfile={this.closeProfile}
                    />        
                : 
                   ''
                }
                <div className="text-warning left-margin-10 top-margin-10" >
      					  	{this.state.message}
      					</div>   
            </span>
    		)
  	}
});

module.exports = PageContainer;