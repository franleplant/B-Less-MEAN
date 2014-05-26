var express = require('express');
var router = express.Router();

//Authorization

function restrict(req, res, next) {
  if (req.user) {
    next();
  } else {
    req.session.error = 'Access denied!';
    res.redirect('/login');
  }
}


/* GET home page. */
router.get('/', restrict, function(req, res) {
  res.render('index', { title: 'Be Less Mean' });
});

router.get('/login', function(req, res) {
	if (req.user) {
    	res.redirect('/');
  	}
  res.render('login', { title: 'Be Less Mean' });
});



var passport = require('passport');

router.post('/login', 
	passport.authenticate('local', { 
							successRedirect: '/',
                            failureRedirect: '/login'
                     	})
);


router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/login');
});

module.exports = router;
