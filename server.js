const PORT = process.env.PORT || 3000;
const express = require('express')
const bodyParser = require('body-parser');
const _ = require('lodash');

const replaceURLS = require('./app/api/replace-urls');
const sendSMS = require('./app/api/sendSMS');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static('public'));

app.post('/sms', (req, res) => {

    var body = _.pick(req.body, ['msg', 'no']);
    
    replaceURLS(body.msg).then((results) => {
        return sendSMS(results,body.no)
    }).then((results)=>{
        res.status(200).send(results);
    }).catch((err) => {
        res.status(400).send(err);

    });

});


if(!module.parent)
{
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});
}

module.exports.app=app;
