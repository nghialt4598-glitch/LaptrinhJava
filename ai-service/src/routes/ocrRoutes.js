const express = require("express");
const router = express.Router();
const multer = require("multer");

const { scanText } = require("../controllers/ocrController");

const upload = multer();// Save RAM

router.post("/scan", upload.single("image"), scanText);

module.exports = router;