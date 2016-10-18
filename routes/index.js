var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '临澧县廖妹子湘北食品加工厂' });
});
router.get('/about', function(req, res, next) {
    res.render('about', { title: '临澧县廖妹子湘北食品加工厂' });
});
router.get('/list', function(req, res, next) {
    res.render('list', { title: '临澧县廖妹子湘北食品加工厂' });
});
router.get('/product', function(req, res, next) {
    res.render('product', { title: '临澧县廖妹子湘北食品加工厂' });
});
router.get('/case', function(req, res, next) {
    res.render('case', { title: '临澧县廖妹子湘北食品加工厂' });
});
router.get('/after-sales', function(req, res, next) {
    res.render('after-sales', { title: '临澧县廖妹子湘北食品加工厂' });
});
router.get('/join', function(req, res, next) {
    res.render('join', { title: '临澧县廖妹子湘北食品加工厂' });
});
router.get('/mes', function(req, res, next) {
    res.render('mes', { title: '临澧县廖妹子湘北食品加工厂' });
});
module.exports = router;
