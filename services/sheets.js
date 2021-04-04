const { spreadsheetId } = require("../config").googlesheets;
const { keyFilename } = require("../config").firestore;

const { google } = require("googleapis");

const auth =
  process.env.NODE_ENV === "development"
    ? new google.auth.GoogleAuth({
        keyFile: keyFilename,
        scopes: ["https://www.googleapis.com/auth/spreadsheets"],
      })
    : new google.auth.GoogleAuth({
        scopes: ["https://www.googleapis.com/auth/spreadsheets"],
      });

const sheets = google.sheets({ version: "v4", auth });

const formatRow = (headers, row) => {
  const object = {};
  headers.forEach((header, index) => {
    object[header] = row[index];
  });
  return object;
};

const getSheetData = (sheet, accountId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let res = await sheets.spreadsheets.values.get({
        spreadsheetId,
        range: sheet,
        valueRenderOption: "UNFORMATTED_VALUE",
        dateTimeRenderOption: "FORMATTED_STRING",
      });
      let values = res.data.values;

      let headers = values.splice(0, 1)[0];
      if (accountId) {
        let userColumn = headers.findIndex((v) => {
          if (v == "AccountID") {
            return true;
          }
          return false;
        });
        resolve(
          values
            .filter((row) => {
              return row[userColumn] == accountId;
            })
            .map((row) => formatRow(headers, row))
        );
      } else {
        resolve(values.map((row) => formatRow(headers, row)));
      }
    } catch (error) {
      console.error(error);
      reject(error);
    }
  });
};

const getBalance = (accountId) => {
  try {
    return getSheetData("Balances", accountId);
  } catch (error) {
    throw error;
  }
};

const getDepositsByAccountId = (accountId) => {
  try {
    return getSheetData("Deposits", accountId);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getBalance,
  getDepositsByAccountId,
};
