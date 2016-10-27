var express = require('express');
var router = express.Router();
 
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

//I'm not sure why you have so much logic in one route file ... -_-
router.get('/admin', function(req, res, next){
	res.render('admin', {title: 'Admin' });
})
 
router.get('/restaurants/:name', function(req, res, next){
 
    res.render('res-temp');
});

router.get('/charts', function(req, res, next){
	res.render('charts');
});

router.get('/restaurants/:name1/:name2', function(req, res, next){

	res.render('item-temp');
});
 
router.get('/restaurants', function(req, res, next){

    res.render('restaurants');
});

router.get('/login', function(req, res, next){
	res.render('login');
});

router.get('/profile', function(req, res, next){
	res.render('profile');
});

router.get('/profile/:userID', function(req, res, next){
	res.render('profile-temp');
});
 
module.exports = router;
