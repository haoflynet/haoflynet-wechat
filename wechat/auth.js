/**
 * Created by haofly on 16/7/16.
 */

var settings = require('../settings.js');
var sha1 = require('sha1');

/**
 * 验证消息确实来自微信服务器
 */
exports.checkSignature = function(req) {
    var tmpArr = Array(settings.token, req.query.timestamp, req.query.nonce).sort();
    var tmpStr = tmpArr.join('');
    tmpStr = sha1(tmpStr);

    return tmpStr === req.query.signature;
};