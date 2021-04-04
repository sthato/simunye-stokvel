const express = require("express");
const router = express.Router();
const svcSheets = require("../models/sheets");

router.use((req, res, next) => {
  if (req.user && req.user.accountID) {
    next();
  } else {
    res.sendStatus(401);
  }
});

router.get("/", (req, res) => {
  let user = {
    accountID: req.user.accountID,
    email: req.user.email,
    firstname: req.user.first,
    lastname: req.user.last,
    role: req.user.role,
  };
  res.json(user);
});

router.get("/balance", async (req, res, next) => {
  try {
    let accountID = req.user.accountID;
    let balance = await svcSheets.getBalance(accountID);
    let deposits = await svcSheets.getDepositsByAccountId(accountID);
    const today = new Date();
    const currentSemester = `S${parseInt(
      (today.getMonth() + 1 + 7) / 7
    )}-${today.getFullYear()}`;
    let currentSemesterContribution = deposits.reduce(
      (currentAmount, contribution) => {
        if (contribution["Semester"] == currentSemester) {
          return currentAmount + contribution["Amount"];
        }
        return currentAmount;
      },
      0
    );
    balance[0]["SemesterContribution"] = currentSemesterContribution;
    res.json(balance[0]); //Only 1 balance per user
  } catch (e) {
    next(e);
  }
});

router.get("/deposits", async (req, res, next) => {
  try {
    let accountID = req.user.accountID;
    let deposits = await svcSheets.getDepositsByAccountId(accountID);
    res.json(deposits);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
