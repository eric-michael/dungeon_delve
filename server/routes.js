const careerController = require("./controllers/career");

exports.getAllCareers = careerController.getAllCareers;
exports.test = careerController.test;
exports.test2 = (req, res) => {
  res.send("h2i");
};
