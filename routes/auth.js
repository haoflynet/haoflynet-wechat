/**
 * Created by haofly on 16/7/16.
 */
var express = require('express');
var auth = require('../wechat/auth.js');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send(auth.checkSignature(req));
});


module.exports = router;
