/*
 *微信相关操作api
 */
var wechatApi = {};
var config = require('../config/config');
var appID = config.wechat.appID;
var appSecret = config.wechat.appSecret;
var utils = require('./utils');
var api = {
    accessToken : `${config.wechat.prefix}token?grant_type=client_credential`,
    upload : `${config.wechat.prefix}media/upload?`
}

//获取access_token
wechatApi.updateAccessToken = function(){
    var url = `${api.accessToken}&appid=${appID}&secret=${appSecret}`;
    //console.log(url);
    var option = {
        url : url,
        json : true
    };
    return utils.request(option).then(function(data){

        return Promise.resolve(data);
    })
}

module.exports = wechatApi;
