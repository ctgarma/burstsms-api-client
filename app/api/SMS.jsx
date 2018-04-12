var axios = require('axios');

//const SMS_URL = 'http://localhost:3000/sms';
const SMS_URL = '/sms';

module.exports = {
  postSMS: function(message, no) {
    return axios({
      method: 'post',
      url: SMS_URL,
      data: {
        msg: message,
        no: no
      }
    }).then(function(res) {
      return res;

    }, function(res) {
      throw new Error(res);
    });
  }
}
