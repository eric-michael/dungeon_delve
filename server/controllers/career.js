const careerModel = require("../models/career").Career;

exports.getAllCareers = (req, res) => {
  res.send(careerModel.getAllCareers());
};
