const axios = require('axios');

const BITLY_URL='https://api-ssl.bitly.com/v3/shorten?access_token=';
require('dotenv').load();

const ACCESS_TOKEN=process.env.access_token;

var shortUrl =(uri) =>{
  var requestURL =`${BITLY_URL}${ACCESS_TOKEN}&longUrl=${uri}`;
  return axios.get(requestURL).then((res)=>{
    return res.data.data.url;
  }).catch((err)=>{
    throw new Error(err);
  });



}

module.exports.shortUrl=shortUrl;
