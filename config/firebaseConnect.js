const admin = require("firebase-admin");
// const config = require("./config");

const firebaseConnect = admin.initializeApp({
  credential: admin.credential.cert('./kpop-a-month.json'),
});

module.exports = firebaseConnect;
