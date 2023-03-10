import { createServer } from "miragejs";

export function makeServer({ environment = "development" } = {}) {
  let server = createServer({
    environment,

    routes() {
      this.namespace = "api";

      this.get("/location", () => {
        return [
          {
            location_id: 1,
            title: "Hall - 3",
            description: "Boys hall of residence",
          },
          {
            location_id: 2,
            title: "Hall - 1",
            description: "Boys hall of residence",
          },
          {
            location_id: 3,
            title: "Hall - 4",
            description: "Boys hall of residence",
          },
        ];
      });
    },
  });

  return server;
}
