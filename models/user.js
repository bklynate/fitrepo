const passportLocalMongoose = require("passport-local-mongoose");
const mongoose = require("mongoose");
const macroTracker = require("./macroTracker.js");
const macroSchema = mongoose.model("Tracker").schema;

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  created: {
    type: Date,
    default: Date.now
  },
  macroTracker: [macroSchema]
});

// ADDS THE METHODS FOR USER AUTH
userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);
