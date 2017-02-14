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
              1 在命令行输入:
                i npm install -g express
                i npm install -g express-generator


- 对接微信公众号
      - 第1步
          - 使用的模块
          - sha1 : 加密模块
          - 安装 : npm install sha1 -save
      - 第2步
          - 微信公众号：接口配置和签名验证
                1 接口配置
                      i 到微信公众平台，填写服务器配置
                2 验证服务器地址的有效性
                      i 说明
                          ii 填写服务器配置后
                                iii 微信服务器会轮询发起GET请求到服务器地址
                                     iiii 接收请求，拿到入参：signature(微信加密签名),timestamp(时间戳),nonce(随机数),echostr(随机字符串)
                      i doc
                          ii http://blog.csdn.net/zzwwjjdj1/article/details/52222137
                      i create a folder:common
                          ii create a file:utils.js
                      i create a folder:config
                          ii create a file:config.json
                      i repair app.js
      - 第3步
          - 获取接口调用凭据
              1 微信公众号：access_token获取与保存
                    i 说明：
                        ii 接口1
                            iii 请求地址：https://api.weixin.qq.com/cgi-bin/token
                            iii 送参：grant_type（=client_credential）,appid,secret
                                 iiii 封装后的请求：https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=APPID&secret=APPSECRET
                    i doc
                       ii http://blog.csdn.net/zzwwjjdj1/article/details/52222748
                    i 需要的模块
                        ii request  -- 调用微信接口模块
                        ii redis    -- redis数据库模块
                        ii xml2js   -- xml转为js对象
                            iii 安装
                                iiii npm install request xml2js redis -save
                    i cd a folder:common
                       ii repair a file:utils.js
                    i cd a folder:common
                       ii create a file:wechatapi.js
                    i cd a folder:routes
                       ii repair a file:index.js
      - 第4步
          1 微信公众测试号：接口配置和签名验证 【wechat模块】
                i doc
                    ii http://blog.csdn.net/zzwwjjdj1/article/details/52367925
                i cd a folder:routes
                    ii create a file:wechat.js
                i repair app.js
                i 注意
                    ii 此步骤为：模块开发与测试。
                    ii 测试，是因为调用微信公众测试号开发。

- 执行
   - 双击 6379.bat
   - cmd.exe
   - npm install
   - npm start
