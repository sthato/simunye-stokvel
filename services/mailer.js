const nodemailer = require("nodemailer");
const { host, user, pass } = require("../config").mail;
const fs = require("fs");

const transporter = nodemailer.createTransport({
  pool: true,
  host: host,
  port: 465,
  secure: true, // use TLS
  auth: {
    user,
    pass,
  },
});

transporter.verify(function (error, success) {
  if (error) {
    console.error("nodemailer", error);
  } else {
    console.log("nodemailer verified");
  }
});

const send = (message) => {
  message["from"] = user;
  const htmlstream = fs.createReadStream(
    __dirname + "/templates/registration.html"
  );
  /*
     .pipe(new StringStream('utf-8'))
     .split('\n')                                          // split every line
     .map(async (line) => await makeYourChangesTo(line))   // update the lines
     .join('\n')                                           // join again
     .pipe(fs.createWriteStream('output/file.txt'))
  */
  return new Promise((resolve, reject) => {
    transporter.sendMail({ ...message, amp: htmlstream }, (err, info) => {
      if (err) {
        console.error("nodemailer", err);
        resolve({ error: err });
      } else {
        resolve(info);
      }
    });
  });
};

module.exports = { send };
