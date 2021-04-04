module.exports = {
  port: process.env.PORT || 3001,
  env: process.env.NODE_ENV || "development",
  secret: process.env.SESSION_SECRET,
  firestore: {
    projectId: process.env.FIRESTORE_PROJECT_ID,
    keyFilename: process.env.FIRESTORE_KEYFILE,
  },
  mail: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
    host: process.env.MAIL_SERVER,
  },
  googlesheets: {
    spreadsheetId: process.env.GOOGLE_SHEETS_SPREADSHEET_ID,
    sheetRange: process.env.GOOGLE_SHEETS_SHEET_RANGE,
  },
};
