const mongoose = require("mongoose");

const trackerSchema = new mongoose.Schema({
  protein: Number,
  carb: Number,
  fat: Number,
  created: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Tracker", trackerSchema);
