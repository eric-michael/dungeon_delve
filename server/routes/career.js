const express = require("express");
const router = express.Router();
const careerController = require("../controllers/career");

router.get("/getAllCareers", careerController.getAllCareers);

module.exports = router;