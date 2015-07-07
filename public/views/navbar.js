var React = require('react')
var Login = require('./login.js')
var Logout = require('./logout.js')

var NavBar = React.createClass({
    
  	getInitialState: function() {
    	return {message: ""};
  	},
    
    showMessage: function (message, timeToShow) {
        var that = this;
        that.setState({message: message});
        setTimeout(function() {
            that.setState({message: ""});
        }, 4000);
    },
    
    render: function() {
      return (
        <nav className="navbar navbar-default">
        <div className="container-fluid">
          
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed"
                    data-toggle="collapse" data-target="#navbar-collapse-section">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="brand" href="/"></a>
          </div>
      
          <div className="collapse navbar-collapse" id="navbar-collapse-section">
             
            <div className="pull-right login"> 
              	<div className="loginLine form-inline">
              				{this.props.user === null && !this.props.registrationOpen
              				?
                        <Login 
                          showMessage={this.showMessage}
                          setUserName={this.props.setUserName}
                          openProfile={this.props.openProfile}                    
                        />
              				: 
                        ''
                      }
                      {this.props.user !== null && !this.props.registrationOpen
                      ?
                        <Logout 
                          user={this.props.user}
                          showMessage={this.showMessage}
                          clearUserName={this.props.clearUserName}
                        />
                      :
                        ''
                      }
              				{this.props.user === null && this.props.registrationOpen
              			  ?
              				<button className='btn btn-sm' onClick={this.props.closeProfile}>Cancel</button>
              			  :
              				  ''
              			  }
        			  </div>
          			
           			<div className="text-warning left-margin-10 top-margin-10">
                    {this.state.message}
                </div>
              </div>
              
          </div>
        </div>
      </nav>
      )
    }
});

module.exports = NavBar;





