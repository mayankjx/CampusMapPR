<template>
  <h1>hey</h1>
</template>

<script>
// @ is an alias to /src
import axios from "axios";

export default {
  name: "Home",
  mounted() {
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
};
</script>
