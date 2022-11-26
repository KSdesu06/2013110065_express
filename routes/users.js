var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('Hello Kitty');
  res.status(200).json({fullname: 'Kanlayanuch Srichote'})
});
router.get('/bio', function(req, res, next) {
  res.status(200).json({
    fullname: 'Kanlayanuch Srichote',
    nickname: 'Kat',
    hobby: 'sleep',
    gitusername: 'KSdesu06'
  })
});


module.exports = router;
