const { port, secret } = require("./config");
const express = require("express");
const path = require("path");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const flash = require("express-flash");
const helmet = require("helmet");

const app = express();

const index = require("./routes/index");
const user = require("./routes/user");

if (app.get("env") === "development") {
  app.use(require("cors")());
}

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  require("express-session")({
    secret,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(flash());
app.use(passport.session());
//app.use(helmet());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", index);
app.use("/user", user);

require("./models/account").initialize(passport);

/*
app.use((req, res) => {
  console.log("Sending index.html");
  res.sendFile("index.html", { root: "public" });
});
*/

app.use(function (req, res, next) {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

if (app.get("env") === "development") {
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.send({
      message: err.message,
      error: err,
    });
  });
}

app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.send({
    message: err.message,
    error: {},
  });
});

app.listen(port, () => {
  console.log(`Server running...`);
});

module.exports = app;
