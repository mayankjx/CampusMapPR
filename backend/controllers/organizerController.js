const supabase = require("../config/supabaseClient");
const prisma = require("../config/db");
BigInt.prototype.toJSON = function() { return this.toString(); };
async function getOrganizerById(req, res){
    const organizerID = BigInt(req.params.organizerID);
    try {
        const eventOrganizer = await prisma.eventOrganizers.findUnique({
          where: {
            OrganizerID: organizerID,
          },
        });
    
        if (!eventOrganizer) {
          return res.status(404).json({ message: `Organizer with OrganizerID ${organizerID} not found.` });
          return;
        }
    
        let organizerInfo;
    
        switch (eventOrganizer.OrganizerType) {
          case 'faculty':
            organizerInfo = await prisma.facultyOrganizers.findUnique({
              where: {
                OrganizerID: organizerID,
              },
            });
            break;
          case 'clubs':
            organizerInfo = await prisma.clubsOrganizers.findUnique({
              where: {
                OrganizerID: organizerID,
              },
            });
            break;
          case 'service_provider':
            organizerInfo = await prisma.serviceProviderOrganizers.findUnique({
              where: {
                OrganizerID: organizerID,
              },
            });
            break;
          case 'canteen':
            organizerInfo = await prisma.serviceProviderOrganizers.findUnique({
              where: {
                OrganizerID: organizerID,
              },
            });
            break;
          default:
            return res.status(400).json({ message: `Invalid OrganizerType for OrganizerID ${organizerID}.` });
        }
    
        if (organizerInfo) {
          return res.json({
            organizerInfo,
          });
        } else {
          return res.status(404).json({ message: `Organizer information not found for OrganizerID ${organizerID}.` });
        }
      } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'An error occurred' });
      }
}
module.exports = {
    getOrganizerById,
  };