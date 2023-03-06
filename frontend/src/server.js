import { createServer, Model, Response } from "miragejs";

export function makeServer({ environment = "development" } = {}) {
  let server = createServer({
    environment,

    models: {
      location: Model,
    },

    routes() {
      this.namespace = "api";

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
  });
  return server;
}
