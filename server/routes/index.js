let express = require("express");
let router = express.Router();

let indexController = require("../controllers/index");

router.get('/', indexController.displayHomePage);

router.get('/index', indexController.displayHomePage);

router.get('/about',indexController.displayAboutPage);

router.get("/products", indexController.displayProductpage);

router.get("/login", indexController.displayLoginPage);

router.post("/login", indexController.processLoginPage);

router.get("/register", indexController.displayRegisterPage);

router.post("/register", indexController.processRegisterPage);

router.get("/logout", indexController.performLogout);

module.exports = router;
