<template>
  <h1>hey</h1>
</template>

<script>
// @ is an alias to /src
import axios from "axios";

export default {
  name: "Home",
  methods: {
    locationsApi() {
      // get all the locations
      axios.get("/api/location").then((response) => {
        console.log(response.data, response.status);
      });

      let newLocation = {
        location_id: 4,
        title: "OAT",
        description: "Open Air Theatre where varity of events happen",
      };

      // creating a new location
      axios
        .post("/api/location", newLocation)
        .then((response) => {
          console.log(response.status);
        })
        .catch((error) => {
          console.log(error);
        });

      // searching a location by location id
      let locationId = 1;
      axios
        .get(`/api/location/searchId/${locationId}`)
        .then((response) => {
          console.log(response.data, response.status);
        })
        .catch((error) => {
          console.log(error);
        });

      // deleting a location by location id
      axios.delete(`/api/location/searchId/${locationId}`).then((response) => {
        console.log(response.data, response.status);
      });

      // getting all location again
      axios.get("/api/location").then((response) => {
        console.log(response.data, response.status);
      });
    },

    eventsApi() {
      // get all the events
      axios.get("/api/event").then((response) => {
        console.log(response.status, response.data);
      });

      let event = {
        event_id: 4,
        title: "Random event",
        description: "Blah blah blah",
        start_date: "20-05-2023",
        end_date: "30-05-2023",
        created_by: 6,
        location: 14,
      };

      // create a new event
      axios
        .post("/api/event", event)
        .then((response) => console.log(response.data))
        .catch((error) => console.log(error));

      axios.get("/api/event").then((response) => {
        console.log(response.status, response.data);
      });

      // get event using event ID
      let eventId = 2;
      axios
        .get(`/api/event/searchId/${eventId}`)
        .then((response) => console.log(response.data));

      // delete event using event ID
      axios
        .delete(`/api/event/searchId/${eventId}`)
        .then((response) => console.log(response.data))
        .catch((error) => console.log(error));

      axios.get("/api/event").then((response) => {
        console.log(response.status, response.data);
      });

      let organizerId = 9;

      // Get all events by Organizer ID => by a particular organizer
      axios
        .get(`/api/event/searchOid/${organizerId}`)
        .then((response) => console.log(response.data));

      let locationId = 19;

      // Get all events by location ID => on a particular location
      axios
        .get(`/api/event/searchLid/${locationId}`)
        .then((response) => console.log(response.data));
    },
  },
  mounted() {
    // this.locationsApi();
    this.eventsApi();
  },
};
</script>
