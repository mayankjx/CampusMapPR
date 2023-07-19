const supabase = require("../config/supabaseClient");
const prisma = require("../config/db");

async function getAllLocations(req, res) {
  try {
    const location = await prisma.locations.findMany();
    const locationsJSON = location.map((locate) => ({
      LocationID: String(locate.LocationID),
      Visibility: String(locate.Visibility),
      LocationType: locate.LocationType,
      Description: locate.Description,
      Name: locate.Name,
      x_cord: locate.x_cord,
      y_cord: locate.y_cord,
    }));

    console.log(location);

    return res.status(200).json(locationsJSON);
  } catch (error) {
    console.error("Error retrieving locations:", error);
    return res.status(500).json({ error: "Failed to retrieve locations" });
  }
}

module.exports = {
  getAllLocations,
};
