const express = require("express");
const router = express.Router();

const contactusController = require("../controller/contactus");

router.post("/", contactusController.postContactUs);

module.exports = router;