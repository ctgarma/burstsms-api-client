var React = require('react');
var ReactDOM = require('react-dom');
var Form = React.createClass({

  OnFormSubmit: function(e) {
    e.preventDefault();
    var mobileno = this.refs.mobileno.value;
    var message = this.refs.message.value;

    if (mobileno.length > 0) {
      this.refs.mobileno.value = '';
      this.refs.message.value = '';
      this.props.onSend(message, mobileno)
    }
  },

  render: function() {
    return (<div className="main">
      <h1 className="title">
        SEND A MESSAGE
      </h1>
      <form onSubmit={this.OnFormSubmit}>
        <div>
          <p>
            <strong>TO</strong>
          </p>
          <input className="main__mobileno" type="tel" name="mobileno" ref="mobileno" pattern="^[0-9\-\+\s\(\)]*$" maxLength="14" required="required"/>
          <span className="validity"></span>
        </div>
        <div>
          <p>
            <strong>MESSAGE</strong>
          </p>
          <textarea className="main__message" placeholder="Hi, I can add up to 3 SMS of text here." ref="message" rows="11" cols="50" maxLength="480" required></textarea>
        </div>
        <div>
          <button className="main__button">send</button>
        </div>
      </form>
    </div>)
  }
});

module.exports = Form;
