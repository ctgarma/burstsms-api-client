var request = require('request');
require('dotenv').load();

const URL='https://api.transmitsms.com/send-sms.json'
const USER=process.env.user;
const PASS=process.env.pass;

var sendSMS = (message, number) => {

    return new Promise((resolve, reject) => {
        var msg = message;
        var no = number;
        var dataString = { message: msg, to: no };
        
        var options = {
            url: URL,
            method: 'POST',
            form: dataString,
            auth: {
                'user': USER,
                'pass': PASS
            }
        };

        function callback(error, response, body) {
            if (!error && response.statusCode == 200) {
                resolve(body);
            } else if (!error){
                reject(response.statusCode);
                }
              else {
                  reject('unable to connect');
              }
            }

        request(options, callback);
    });

}

module.exports = sendSMS;
