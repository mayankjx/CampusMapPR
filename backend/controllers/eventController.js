const supabase = require("../config/supabaseClient");
const prisma = require("../config/db");
BigInt.prototype.toJSON = function() { return this.toString(); };
async function getAllEvents(req, res) {
    try {
      const event = await prisma.events.findMany();
      const eventsJSON = event.map((ev) => ({
        EventID: String(ev.EventID),
        OrganizerID: String(ev.OrganizerID),
        LocationID: String(ev.LocationID),
        Title: ev.Title,
        Description: ev.Description,
        start_date: ev.start_date,
        end_date: ev.end_date,
      }));
  
      console.log(event);
      return res.status(200).json(eventsJSON);
    } catch (error) {
      console.error("Error retrieving events:", error);
      return res.status(500).json({ error: "Failed to retrieve events" });
    }
  }
async function getEventById(req, res) {
  const eventID = BigInt(req.params.eventId);
  try {
    const event = await prisma.events.findUnique({
      where: {
        EventID: eventID,
      },
    });

    if (event.length > 0) {
      return res.json(event);
    } else {
      return res.status(404).json({ message: `Event with EventID ${eventID} not found.` });
    }
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: 'An error occurred' });
  }
}
async function getEventByOId(req, res) {
  const organizerID = BigInt(req.params.organizerId);

  try {
    const event = await prisma.events.findMany({
      where: {
        OrganizerID: organizerID,
      },
    });

    if (event.length > 0) {
      return res.json(event);
    } else {
      return res.status(404).json({ message: `Event with OrganizerID ${organizerID} not found.` });
    }
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: 'An error occurred' });
  }
}
async function getEventByLId(req, res) {
  const locationID = parseInt(req.params.locationId);

  try {
    const event = await prisma.events.findMany({
      where: {
        LocationID: locationID,
      },
    });

    if (event.length > 0) {
      return res.json(event);
    } else {
      return res.status(404).json({ message: `Event with Location ${locationID} not found.` });
    }
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: 'An error occurred' });
  }
}
module.exports = {
    getAllEvents,getEventById,getEventByOId,getEventByLId
};
  