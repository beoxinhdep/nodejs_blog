const express = require("express");
const router = express.Router();

const siteController = require("../app/controllers/SiteController");

// siteController.search;
router.use("/search", siteController.search);

// siteController.index;
router.use("/", siteController.index);

module.exports = router;
