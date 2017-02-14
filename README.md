#####目录
1.express构建
2.实现第三方对接开发（微信公众号）

##### 概述
用nodejs之express来开发，实现第三方对接开发后台。

##### 正文
- 创建后台框架——express
    - doc
        - http://blog.csdn.net/zzwwjjdj1/article/details/51886402
    - 第1步
        - 全局安装2个模块
        - express、express-generator
              1. 在命令行输入:
                i. npm install -g express
                i. npm install -g express-generator


- 对接微信公众号
      - 第1步
          - 使用的模块
          - sha1 : 加密模块
          - 安装 : npm install sha1 -save
      - 第2步
          - 微信公众号：接口配置和签名验证
                1. 接口配置
                      - 到微信公众平台，填写服务器配置
                2. 验证服务器地址的有效性
                      - 说明
                          - 填写服务器配置后
                                - 微信服务器会轮询发起GET请求到服务器地址
                                     2.1.1.1.1. 接收请求，拿到入参：signature(微信加密签名),timestamp(时间戳),nonce(随机数),echostr(随机字符串)
                      2.2. doc
                          2.2.1. http://blog.csdn.net/zzwwjjdj1/article/details/52222137
                      2.3. create a folder:common
                          2.3.1. create a file:utils.js
                      2.4. create a folder:config
                          2.4.1. create a file:config.json
                      2.5. repair app.js
      - 第3步
          - 获取接口调用凭据
              1. 微信公众号：access_token获取与保存
                    1.1. 说明：
                        1.1.1. 接口1
                            1.1.1.1. 请求地址：https://api.weixin.qq.com/cgi-bin/token
                            1.1.1.2. 送参：grant_type（=client_credential）,appid,secret
                                 1.1.1.2.1. 封装后的请求：https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=APPID&secret=APPSECRET
                    1.2. doc
                       1.2.1. http://blog.csdn.net/zzwwjjdj1/article/details/52222748
                    1.3. 需要的模块
                        1.3.1. request  -- 调用微信接口模块
                        1.3.2. redis    -- redis数据库模块
                        1.3.3. xml2js   -- xml转为js对象
                           1.3.3.1. 安装
                                1.3.3.1.1. npm install request xml2js redis -save
                    1.4. cd a folder:common
                       1.4.1. repair a file:utils.js
                    1.5. cd a folder:common
                       1.5.1. create a file:wechatapi.js
                    1.6. cd a folder:routes
                       1.6.1. repair a file:index.js
      - 第4步
          1. 微信公众测试号：接口配置和签名验证 【wechat模块】
                1.1. doc
                    1.1.1. http://blog.csdn.net/zzwwjjdj1/article/details/52367925
                1.2. cd a folder:routes
                    1.2.1. create a file:wechat.js
                1.3. repair app.js
                1.4. 注意
                    1.4.1. 此步骤为：模块开发与测试。
                    1.4.2. 测试，是因为调用微信公众测试号开发。

- 执行
   - 双击 6379.bat
   - cmd.exe
   - npm install
   - npm start
