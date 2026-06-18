const express = require("express");

const router = express.Router();

const queryController = require("../controllers/queryController");

router.post("/query", queryController.executeQuery);

module.exports = router;