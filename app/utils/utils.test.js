const expect =require('expect');
const getUrls = require('get-Urls');
const request=require('supertest');

const bitly = require('../../app/api/bitly.js');
const replaceURLS = require('../../app/api/replace-urls');
const SMS = require('../../app/api/SMS.jsx');

var app = require('../../server').app

var no ='61488888888';  //replace with a valid number
var msg="this is https://google.com";
var newMsg ="this is http://bit.ly/2E4agPG";
var testdata={
	"msg":"hi go to axios and redux  http://google.com and http://apple.com and to my site http://a.com",
	"no":"61488888888"
};


it('should return a set consisting of one element',()=>{
  var SetResults = getUrls(msg);
  if (SetResults.size!=1){
    throw new Error(`expected 1 url found but got ${SetResults.size}`);
  }
});

it('should return a new message',()=>{
  replaceURLS(msg).then((result) => {
    if(result!=newMsg)
    {
      throw new Error(`expected a new msg but got ${result}`);
    }
  }).catch((err)=>{
      throw new Error(`expected a new msg but error encountered`);
  });
});


it('should return a valid response', function (done) {
	this.timeout(10000);

  request(app)
  .post('/sms')
  .send(testdata)
  .expect(200)
  .end(done);
});
