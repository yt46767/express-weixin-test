var express = require('express');
var router = express.Router();
var wechat = require('wechat');

var config = {
  token : 'szkingdom',
  appid : 'wxca28ecbec3bf0e4a',
  appsecret :'430aff6398d629269bf5d994fb6d4888',
  encodingAESKey : ''
};

router.use(express.query());

router.use('/', wechat(config, function(req, res, next) {
    console.log(req.weixin);
    var message = req.weixin;
    //文本
    if (message.Content === '1') {

        res.reply('hehe');
    }

}));

module.exports = router;
