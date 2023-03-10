import { request } from "http";
import { createServer, Model, Response } from "miragejs";

export function makeServer({ environment = "development" } = {}) {
  let server = createServer({
    environment,

    models: {
      location: Model,
      event: Model,
    },

    routes() {
      this.namespace = "api";

      // location API
      this.get("/location", (schema) => {
        return schema.locations.all();
      });

      this.post("/location", (schema, request) => {
        let body = JSON.parse(request.requestBody);
        let success = schema.locations.create(body);
        if (success.attrs) {
          return new Response(200, { some: "OK" });
        }
        return new Response(400, { errors: ["Some error occured"] });
      });

      this.get("/location/searchId/:locationId", (schema, request) => {
        return schema.locations.find(request.params.locationId);
      });

      this.del("/location/searchId/:locationId", (schema, request) => {
        return schema.locations.find(request.params.locationId).destroy();
      });

      // search by name is not implemented in mock server because of its complex nature

      // event API

      // get all the events
      this.get("/event", (schema) => {
        return schema.events.all();
      });

      // create a new event
      this.post("/event", (schema, request) => {
        let body = JSON.parse(request.requestBody);
        let success = schema.events.create(body);
        if (success.attrs) {
          return new Response(200, { some: "Event created successfully" });
        }
        return new Response(500, { errors: ["Internal Server Error"] });
      });

      // get event using event ID
      this.get("/event/searchId/:eventId", (schema, request) => {
        return schema.events.find(request.params.eventId);
      });

      // delete event using event ID
      this.del("/event/searchId/:eventId", (schema, request) => {
        return schema.events.remove(request.params.locationId).destroy();
      });

      // Update event using event ID
      // complex functionality can't be implmeneted using mock db of mirage JS

      // Get all events by Organizer ID => by a particular organizer
      this.get("/event/searchOid/:organizerId", (schema, request) => {
        return schema.events.findBy({ created_by: request.params.organizerId });
      });

      // Get all events by location ID => on a particular location
      this.get("/event/searchLid/:locationId", (schema, request) => {
        return schema.events.findBy({ location: request.params.locationId });
      });
    },
  });
  // loading mock data onto the server
  server.db.loadData({
    locations: [
      {
        location_id: 1,
        title: "Hall 3",
        description: "Boys hall of residence",
      },
      {
        location_id: 2,
        title: "LHTC",
        description: "Central building of campus having all the classrooms",
      },
      {
        location_id: 3,
        title: "PHC",
        description: "Hospital and pharamcy of campus",
      },
    ],
    events: [
      {
        event_id: 1,
        title: "Gusto 2023",
        description: "All sports competition organised by IIITs",
        start_date: "20-06-2023",
        end_date: "30-06-2023",
        created_by: 9,
        location: 19,
      },
      {
        event_id: 2,
        title: "Tech Fest",
        description:
          "All tech competition organized by different clubs of the college",
        start_date: "20-04-2023",
        end_date: "30-04-2023",
        created_by: 12,
        location: 10,
      },
      {
        event_id: 1,
        title: "Inter College Kabaddi Tournament",
        description:
          "All college from jabalpur gather for a bi monthly kabaddi tournament",
        start_date: "20-03-2023",
        end_date: "30-03-2023",
        created_by: 5,
        location: 19,
      },
    ],
  });
  return server;
}
