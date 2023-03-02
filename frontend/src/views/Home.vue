<template>
  <h1>hey</h1>
</template>

<script>
// @ is an alias to /src
import axios from "axios";

export default {
  name: "Home",
  mounted() {
    axios.get("/api/active").then((response) => {
      console.log(response);
    });

    axios.get("/api/location").then((response) => {
      console.log(response);
    });
  },
};
</script>
