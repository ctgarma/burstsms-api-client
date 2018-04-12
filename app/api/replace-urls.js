const getUrls = require('get-Urls');
const bitly = require('./bitly.js');

var replaceUrl = (SetBitLy, source) => {
  var newMsg = source;

  SetBitLy.forEach((value, key) => {
    newMsg = newMsg.replace(key, value);
  });

  return newMsg;
}

var getBitLy = (SetOldUrl) => {

  return new Promise((resolve, reject) => {

    let SetBitLy = new Map()
    var size = SetOldUrl.size;
    var ctr = 0;

    for (let OldUrl of SetOldUrl) {
      bitly.shortUrl(OldUrl).then((res) => {
        SetBitLy.set(OldUrl, res);
        ctr += 1;
        if (size == ctr) {
          resolve(SetBitLy);
        }
      }).catch((err) => {
        console.log(err);
      });
    }

  });

}

var replaceURLS = (source) => {

  return new Promise((resolve, reject) => {

    var SetResults = getUrls(source);

    if (SetResults.size > 0) {
      getBitLy(SetResults).then((SetBitLy) => {
        return replaceUrl(SetBitLy, source);
      }).then((newMsg) => {
        resolve(newMsg);
      }).catch((err) => {
        reject(err);
      });
    } else {
      resolve(source);
    }
  });

}

module.exports = replaceURLS;
