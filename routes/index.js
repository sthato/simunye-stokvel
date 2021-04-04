const express = require("express");
const passport = require("passport");
//const Account = require("../models/account");
const router = express.Router();
/*
router.get("/", (req, res) => {
  console.log(req.session);
  res.send("Hello");
});

router.get("/login", (req, res) => {
  res.send({ user: req.user, error: req.flash("error") });
});

*/
router.post(
  "/login",
  passport.authenticate("local", {
    //failureRedirect: "/login",
    //failureFlash: true,
  }),
  (req, res, next) => {
    req.session.save((err) => {
      if (err) {
        console.error(err);
        res.sendStatus(401);
        return;
      }
      res.send({
        accountID: req.user.accountID,
        email: req.user.email,
        firstname: req.user.first,
        lastname: req.user.last,
        role: req.user.role,
      });
    });
  }
);

router.get("/logout", (req, res, next) => {
  req.logout();
  req.session.save((err) => {
    if (err) {
      return next(err);
    }
    //res.sendFile("index.html", { root: "public" });
    //res.redirect("/");
    res.sendStatus(200);
  });
});

router.get("/ping", (req, res) => {
  res.status(200).send("pong!");
});

module.exports = router;
