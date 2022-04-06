const careerModel = require("../models/career").Career;

exports.getAllCareers = (req, res) => {
  res.send(careerModel.getAllCareers());
};

exports.test = (req, res) => {
  res.send({ message: "server working" });
};
