|--创建后台框架——express
    |--doc
        |--http://blog.csdn.net/zzwwjjdj1/article/details/51886402
    |--第1步
        |--全局安装2个模块
        |--express、express-generator
              |--在命令行输入:
              |--npm install -g express
              |--npm install -g express-generator
========================================================
|--对接微信公众号
      |--第1步
          |--使用的模块
          |--sha1 : 加密模块
          |--安装 : npm install sha1 -save
      |--第2步
          |-- 微信公众号：接口配置和签名验证
                |--doc
                    |--http://blog.csdn.net/zzwwjjdj1/article/details/52222137
                |--create a folder:common
                    |--create a file:utils.js
                |--create a folder:config
                    |--create a file:config.json
                |--repair app.js
      |--第3步
          |-- 微信公众号：access_token获取与保存
                |--doc
                    |--http://blog.csdn.net/zzwwjjdj1/article/details/52222748
                |-- 需要的模块
                      |-- request  -- 调用微信接口模块
                      |-- redis -- redis数据库模块
                      |-- xml2js -- xml转为js对象
                            |-- 安装
                                |-- npm install request xml2js redis -save
                |--cd a folder:common
                    |--repair a file:utils.js
                |--cd a folder:common
                    |--create a file:wechatapi.js
                |--cd a folder:routes
                    |--repair a file:index.js
      |--第4步
          |-- 微信公众测试号：接口配置和签名验证 【wechat模块】
                |--doc
                    |--http://blog.csdn.net/zzwwjjdj1/article/details/52367925
                |--cd a folder:routes
                    |--create a file:wechat.js
                |--repair app.js
                |--注意
                    |--此步骤为：模块开发与测试。
                    |--测试，是因为调用微信公众测试号开发。


# weixin_express
