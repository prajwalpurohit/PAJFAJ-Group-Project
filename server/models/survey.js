let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

//create a model class
let surveyModel = mongoose.Schema(
  {
    email: String,
    GPA: String,
    address: String,
    comments: String,
    country: String,
    dateOfBirth: String,
    firstName: String,
    lastName: String,
    major: String,
    phoneNumber: String,
    school: String,
    semester: String
  },

  {
    collection: "survey",
  }
);

//booksmodel to create new book more powerful than just class
module.exports = mongoose.model("Survey", surveyModel);
