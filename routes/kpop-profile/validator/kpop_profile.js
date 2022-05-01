const services = require("../../controllers/service.getAll");

exports.getAll = function (req, res) {
  services.getAll(req, res);
};


