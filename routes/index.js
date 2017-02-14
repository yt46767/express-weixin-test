var express = require('express');
var router = express.Router();
 // [微信公众号：access_token获取与保存]
var utils = require('../common/utils');
var config = require('../config/config');
var wechatApi = require('../common/wechatApi');
var xml2js = require('xml2js');

/* GET home page. */
router.get('/', function(req, res, next) {
  // [微信公众号：access_token获取与保存]
  console.log("微信的accessToken是："+req.accessToken);

  res.render('index', { title: 'Express' });
});

//获取,验证access_token,存入redis中  [微信公众号：access_token获取与保存]
router.use(function(req, res, next) {

    //根据token从redis中获取access_token
    utils.get(config.wechat.token).then(function(data){
        //获取到值--往下传递
        if (data) {
            return Promise.resolve(data);
        }
        //没获取到值--从微信服务器端获取,并往下传递
        else{
            return wechatApi.updateAccessToken();
        }
    }).then(function(data){
        console.log(data);
        //没有expire_in值--此data是redis中获取到的
        if (!data.expires_in) {
            console.log('redis获取到值');
            req.accessToken = data;
            next();
        }
        //有expire_in值--此data是微信端获取到的
        else{
            console.log('redis中无值');
            /**
             * 保存到redis中,由于微信的access_token是7200秒过期,
             * 存到redis中的数据减少20秒,设置为7180秒过期
             */
            utils.set(config.wechat.token,`${data.access_token}`,7180).then(function(result){
                if (result == 'OK') {
                    req.accessToken = data.access_token;
                    next();
                }
            })
        }

    })
})

module.exports = router;
