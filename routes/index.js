const express = require("express");
const passport = require("passport");
const router = express.Router();

router.post("/login", passport.authenticate("local", {}), (req, res, next) => {
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
      avatar: req.user.avatar,
    });
  });
});

router.get("/logout", (req, res, next) => {
  req.logout();
  req.session.save((err) => {
    if (err) {
      return next(err);
    }
    res.sendStatus(200);
  });
});

router.get("/ping", (req, res) => {
  res.status(200).send("pong!");
});

module.exports = router;
