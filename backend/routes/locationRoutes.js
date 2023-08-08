const express = require("express");
const router = express.Router();

const { getAllLocations } = require("../controllers/locationController");

router.get("/location", getAllLocations);

module.exports = router;
