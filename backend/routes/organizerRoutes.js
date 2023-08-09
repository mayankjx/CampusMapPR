const express = require("express");
const router = express.Router();
const { getOrganizerById } = require("../controllers/organizerController");

router.get("/organizer/:organizerID",getOrganizerById);

module.exports = router;