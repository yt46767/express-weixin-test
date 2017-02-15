var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send(req.accessToken);
  // var body = new Buffer(req.accessToken);

  /*var body = new Buffer("NIHAO");
  res.writeHead(200,"成功！",{
      "Content-Length":body.length,
      "Content-Type":"text/plain"
  });
  res.write(body,"utf8");
  res.end();*/

  // res.send(new Buffer('whoop'));

  // res.redirect('http://google.com');

  res.send('whoop');
  console.log("acceptAccessToken");
});

module.exports = router;
