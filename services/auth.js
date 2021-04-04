const LocalStrategy = require("passport-local").Strategy;
const firestoreSvc = require("./firestore");
require("./sheets");
require("./mailer");

const authenticateUser = async (email, password, done) => {
  let result = await firestoreSvc.getUser(email, password, done);
  console.log(result);
  return result;
};
const serializeUser = (user, done) => {
  return done(null, { username: user.username, accountID: user.accountID });
};
const deserializeUser = async (user, done) => {
  let result = await firestoreSvc.getUserById(user.username, done);
  return result;
};

const initialize = (passport) => {
  passport.use(
    new LocalStrategy(
      {
        usernameField: "email",
      },
      authenticateUser
    )
  );
  passport.serializeUser(serializeUser);
  passport.deserializeUser(deserializeUser);
};

module.exports = {
  authenticateUser,
  serializeUser,
  deserializeUser,
  initialize,
};
