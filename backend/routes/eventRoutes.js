const express = require("express");
const router = express.Router();
const { getAllEvents } = require("../controllers/eventController");
const { getEventById } = require("../controllers/eventController");
const { getEventByOId } = require("../controllers/eventController");
const { getEventByLId } = require("../controllers/eventController");

router.get("/event", getAllEvents);
router.get("/event/searchId/:eventId",getEventById);
router.get("/event/searchLId/:locationId",getEventByLId);
router.get("/event/searchOId/:organizerId",getEventByOId);
module.exports = router;