var express = require('express');
var router = express.Router();

var TodoAPI = require('./api/todo');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index')
});


// 注册api
TodoAPI.regist(router);


module.exports = router;
