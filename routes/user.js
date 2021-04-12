const express = require("express");
const router = express.Router();
const svcSheets = require("../services/sheets");
const svcFirestore = require("../services/firestore");

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

router.get("/contributions", async (req, res, next) => {
  try {
    let accountID = req.user.accountID;
    let balance = (await svcSheets.getBalance(accountID))[0];
    let deposits = await svcSheets.getDepositsByAccountId(accountID);
    let today = new Date();
    let startYear = today.getFullYear();
    let startMonth = 1;
    let endYear = today.getFullYear();
    let endMonth = today.getMonth() + 1;

    let period = 18; //Number of months
    let contributionsBreakdown = {};

    const pad = (month) => {
      if (month < 10) {
        return `0${month}`;
      }
      return month;
    };

    for (
      let currentYearMonth = `${startYear}-${pad(startMonth)}`;
      currentYearMonth <= `${endYear}-${pad(endMonth)}`;
      currentYearMonth = `${startYear}-${pad(startMonth)}`
    ) {
      contributionsBreakdown[currentYearMonth] = {
        amount: 0,
        target: (balance["Opening Balance"] / period).toFixed(2),
      };
      startMonth += 1;
    }
    deposits.forEach((deposit) => {
      contributionsBreakdown[deposit["Month"]]["amount"] += deposit["Amount"];
    });

    res.json(contributionsBreakdown);
  } catch (error) {
    next(error);
  }
});

router.get("/allcontributions", async (req, res, next) => {
  try {
    let monthlyContributions = await svcSheets.getMonthlyContributions();
    let now = new Date();
    const pad = (month) => {
      if (month < 10) {
        return `0${month}`;
      }
      return month;
    };
    let output = [];
    let index = 0;
    while (
      monthlyContributions[index]["Month"] !=
      `${now.getFullYear()}-${pad(now.getMonth() + 2)}`
    ) {
      output.push(monthlyContributions[index]);
      index++;
    }
    res.json(output);
  } catch (error) {
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

router.post("/changepassword", async (req, res, next) => {
  try {
    let email = req.user.email;
    await svcFirestore.changePassword(email, req.body.password);
    res.sendStatus(200).json({
      message: "Password Changed",
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
