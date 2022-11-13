let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

// connect to our Book Model
let Survey = require("../models/survey");

/* GET Route for the survey List page - READ OPeration */
router.get("/", (req, res, next) => {
  Survey.find((err, surveyList) => {
    if (err) {
      return console.error(err);
    } else {
      
      res.render("survey", {title: "Survey", SurveyList: surveyList})
     
    }
  });
});

module.exports = router;
