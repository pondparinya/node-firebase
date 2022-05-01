const validator = require("./validator/kpop_profile");

exports.HTTP_getAll = function (req, res) {
  validator.getAll(function (error, result) {
    if (error) {
      res.status(400).send({ error: error.details[0].message });
    } else {
      res.status(200).send(result);
    }
  });
};
