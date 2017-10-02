const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const keys = require("./config/keys");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3000;
const url = "mongodb://localhost/macrotracker2017";
const User = require("./models/user");

mongoose.connect(url);

app.use(function(req, res, next) {
  if (req.headers["x-forwarded-proto"] === "https") {
    res.redirect("http://" + req.hostname + req.url);
  } else {
    next();
  }
});

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

//=============================
//=====PASSPORT CONFIG=========
//=============================
app.use(
  require("express-session")({
    secret: keys.passportSecret,
    resave: false,
    saveUninitialized: false
  })
);
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
// THEY READ THE SESSION ENCODES AND
// THEN DECODES THE SESSION
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

app.listen(PORT, function() {
  console.log("Alive on port " + PORT);
});
