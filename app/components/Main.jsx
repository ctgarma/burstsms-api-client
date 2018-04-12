var React = require('react');
var Form = require('Form');
var SMS = require('SMS');

var Main = React.createClass({

  handleSend: function(message, mobileno) {
    var that = this;
    SMS.postSMS(message, mobileno).then(function(res) {

      alert("message sent");
    }).catch(function(errorMessage) {
      alert("message not sent");

    });
  },
  render: function() {
    return (<div>
      <div className="logo">
      <img src="/images/logo.png"/>
    </div>
      <Form onSend={this.handleSend}/>
      <div className="footer"><a href="http://burstsms/com.au">BURST SMS HOME</a></div>
    </div>)
  }

});

module.exports = Main;
