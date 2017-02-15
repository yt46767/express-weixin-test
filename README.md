## 目录
1.express构建
2.实现第三方对接开发（微信公众号）

## 概述
用nodejs之express来开发，实现第三方对接开发后台。

## 正文
###创建后台框架——express

    |- doc
        |- http://blog.csdn.net/zzwwjjdj1/article/details/51886402
    |- 第1步
        |- 全局安装2个模块
        |- express、express-generator
              |- 在命令行输入:
                    |- npm install -g express
                    |- npm install -g express-generator
###对接微信公众号

      |- 第1步
          |- 使用的模块
          |- sha1 : 加密模块
          |- 安装 : npm install sha1 -save
      |- 第2步
          |- 微信公众号：接口配置和签名验证
                |-（1）接口配置
                      |- 到微信公众平台，填写服务器配置
                |-（2）验证服务器地址的有效性
                      |- 说明
                          |- 填写服务器配置后
                                |- 微信服务器会轮询发起GET请求到服务器地址
                                    |- 接收请求，拿到入参：signature(微信加密签名),timestamp(时间戳),nonce(随机数),echostr(随机字符串)
                      |- doc
                          |- http://blog.csdn.net/zzwwjjdj1/article/details/52222137
                      |- create a folder:common
                          |- create a file:utils.js
                      |- create a folder:config
                          |- create a file:config.json
                      |- repair app.js
                      |- 注意
                          |- 微信公众测试号的腾讯服务器对接地址是：http://yt46767.vicp.cc/wechat
                |-（3）获取接口调用凭据
                      |- 微信公众号：access_token获取与保存
                          |- 说明：
                              |- 接口1
                                  |- 请求地址：https://api.weixin.qq.com/cgi-bin/token
                                  |- 送参：grant_type（=client_credential）,appid,secret
                                      |- 封装后的请求：https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=APPID&secret=APPSECRET
                          |- doc
                              |- http://blog.csdn.net/zzwwjjdj1/article/details/52222748
                          |- 需要的模块
                                |- request  -- 调用微信接口模块
                                |- redis -- redis数据库模块
                                |- xml2js -- xml转为js对象
                                      |- 安装
                                          |- npm install request xml2js redis -save
                          |- cd a folder:common
                              |- repair a file:utils.js
                          |- cd a folder:common
                              |- create a file:wechatApi.js
                          |- cd a folder:routes
                              |- repair a file:index.js
                |- 注意
                    |- 微信公众测试号的腾讯服务器对接地址:
                                |- http://yt46767.vicp.cc/wechat
      |- 第3步
          |- 微信公众测试号：接口配置和签名验证 【wechat模块】
              |- doc
                  |- http://blog.csdn.net/zzwwjjdj1/article/details/52367925
              |- cd a folder:routes
                  |- create a file:wechat.js
              |- repair app.js
              |- 注意
                  |- 此步骤为：模块开发与测试。
                  |- 测试，是因为调用微信公众测试号开发。
                  |- 微信公众测试号的腾讯服务器对接地址:
                             |- http://yt46767.vicp.cc/wechat

## 执行
   - 双击 6379.bat
   - cmd.exe
   - npm install
   - npm start


## 调试
  - 准备工作
    - 安装supervisor
      - npm -g install supervisor
      - doc
         - http://jafeney.com/2016/01/10/express%E6%90%AD%E5%BB%BAnodeJS%E4%B8%AD%E9%97%B4%E5%B1%82%EF%BC%88%E4%B8%89%EF%BC%89/
    - 安装node-inspector
       - npm install -g node-inspector
  - 执行
    - supervisor --debug ./bin/www
    - node-inspector & -p 3000 (错误指令)
    - node-inspector --web-port 3000 --debug-port 5858 (正确指令)
    - 浏览器访问
       - http://localhost:3000/?ws=localhost:3000&port=5858 (错误指令)
       - http://127.0.0.1:3000/?port=5858 (正确指令)
  - doc
     - http://blog.csdn.net/u011413061/article/details/50528247

## 外网访问
    - http://yt46767.vicp.cc
    - http://yt46767.vicp.cc/acceptAccessToken

## 本地访问
    - http://localhost:3000/
    - http://localhost:3000/acceptAccessToken

## git操作
git clone git@github.com:yt46767/weixin_express.git
