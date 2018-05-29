var express = require('express');
var router = express.Router();
var User = require('../controller/User');
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});
//通过路由加载reg页面
router.get('/reg', User.reg)

module.exports = router;