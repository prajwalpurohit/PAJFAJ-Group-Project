var express = require('express');
var router = express.Router();
let indexController = require('../controllers/index');

router.get('/', indexController.displayHomePage);

router.get('/home', indexController.displayHomePage);

router.get('/about',indexController.displayAboutPage);

router.get('/products',indexController.diplayProductPage);




/* GET Contact Us page. */
router.get('/survey', function(req, res, next) {
  res.render('survey', { title: 'Contact'});
});

router.get('/login', (req, res, next) => {
  if (!req.user) {
    res.render('auth/login', {
      title: "Login Page",
      messages: req.flash("loginMessage"),
      displayName: req.user ? req.user.displayName : "",
  });
} else {
  return res.redirect('/');
}
});

router.get('/login', (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    //if server errors?
    if(err) {
      return next(err);
    }
    //if user login errors?
    if(!user) {
      req.flash("loginMessage", "Authentication Error");
      return res.redirect('/login');
    }
    req.login(user, (err) => {
      // server error?
      if (err) {
        return next(err);
      }
      const payload = 
            {
                id: user._id,
                displayName: user.displayName,
                username: user.username,
                email: user.email
            }

            const authToken = jwt.sign(payload, DB.Secret, {
                expiresIn: 604800 // 1 week
            });
      return res.redirect('/survey-list');
    });
  })(req, res, next);
});

router.get('/register', function(req, res, next) {
  //check if the user is not already logged in
  if(!req.user) {
    res.render('auth/register', {
      title: "Register Page",
      messages: req.flash("registerMessage"),
      displayName: req.user ? req.user.displayName : "",
    });
  } else {
    return res.redirect('/');
  }
});

router.get('/register', function(req, res, next) {
  // instantiate a user object
  let newUser = new User({
  username: req.body.username,
  //password: req.body.password
  email: req.body.email,
  displayName: req.body.displayName,
  });

  User.register(newUser, req.body.password, (err) => {
    if (err) {
      console.log("Error: Inserting New User");
      if (err.name == "UserExistsError") {
        req.flash(
          "registerMessage",
          "Registration Error: User Already Exists!"
        );
        console.log("Error: User Already Exists!");
      }
      return res.render("auth/register", {
        title: "Register",
        messages: req.flash("registerMessage"),
        displayName: req.user ? req.user.displayName : "",
      });
    } else {
      // if no error exists, then registration is successful

      // redirect the user and authenticate them

      return passport.authenticate("local")(req, res, () => {
        res.redirect("/survey-list");
      });
    }
  });
});

router.get('/logout', function(req, res, next) {
  req.logout(function(err){
    if(err) {
        return next(err);
    }
    res.redirect('/');
});
});

module.exports = router;
