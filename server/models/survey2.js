let mongoose = require('mongoose');

let survey2Model = mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    college: String,
    program: String,
    classDays: String,
    hours: Number,
    difficulty: Number,
    style: String
},
{
    collection: "survey2"
});

module.exports = mongoose.model('Survey2', survey2Model);