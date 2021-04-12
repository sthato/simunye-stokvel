const Firestore = require("@google-cloud/firestore");
const shortid = require("shortid");
const bcrypt = require("bcrypt");

const { projectId, keyFilename } = require("../config").firestore;
const mail = require("./mailer");

const db =
  require("../config").env === "development"
    ? new Firestore({
        projectId,
        keyFilename,
      })
    : new Firestore();

const createUser = async (user) => {
  try {
    let password = shortid.generate();
    let hash = await bcrypt.hash(password, 10);
    user["password"] = hash;

    const docRef = db.collection("users").doc(user.username);
    await docRef.set({ ...user });

    let result = await mail.send({
      to: user.email,
      subject: "Registration",
      text: `User ${user.username} registered with password ${password}`,
      password,
    });
    if (result.messageId) {
      await db
        .collection("users")
        .doc(user.username)
        .set({ mailSent: true }, { merge: true });
    } else {
      await db
        .collection("users")
        .doc(user.username)
        .set({ mailSent: false, mailError: result.err }, { merge: true });
    }
  } catch (err) {
    console.error(err);
  }
};

const getUser = async (username, password, done) => {
  console.log("getUser", username);
  let docRef = db.collection("users").doc(username);
  try {
    let doc = await docRef.get();
    if (doc.exists) {
      let user = doc.data();
      let encrypted = await bcrypt.compare(password, user.password);
      if (encrypted) {
        return done(null, user);
      } else {
        return done(null, false, { message: "Password incorrect" });
      }
    } else {
      return done(null, false, { message: "No such user" });
    }
  } catch (err) {
    console.error(err);
    done(err);
  }
};

const getUserById = async (username, done) => {
  let docRef = db.collection("users").doc(username);
  try {
    let doc = await docRef.get();
    if (doc.exists) {
      let user = doc.data();
      return done(null, user);
    } else {
      return done("No such user");
    }
  } catch (err) {
    return done(err);
  }
};

const changePassword = async (username, password) => {
  let docRef = db.collection("users").doc(username);
  try {
    let doc = await docRef.get();
    if (doc.exists) {
      let hash = await bcrypt.hash(password, 10);
      await db
        .collection("users")
        .doc(username)
        .set({ password: hash }, { merge: true });
    } else {
    }
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  createUser,
  getUser,
  getUserById,
  changePassword,
};
