var firebaseConnect = require("../config/firebaseConnect");
var dbFirestore = firebaseConnect.firestore();


exports.getAll = async function (result) {
  const snapshot = await dbFirestore.collection("Kpop-profile").get();
  let resultGetAll = snapshot.docs.map((doc) => doc.data());
  result(null, resultGetAll);
};

// exports.getUserById = function (userId, result) {
//   dbFirestore
//     .collection("users")
//     .doc(userId)
//     .get()
//     .then((doc) => {
//       if (!doc.exists) {
//         let resultGetUserById = { message: "No such document!" };
//         result(null, resultGetUserById);
//       } else {
//         result(null, doc.data());
//       }
//     })
//     .catch((error) => {
//       result(null, error);
//     });
// };
