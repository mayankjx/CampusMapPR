<template>
  <router-view />
</template>

<script>
import axios from "axios";
let baseURL;
if (process.env.NODE_ENV === "development") {
  baseURL = "http://localhost:3000";
}

export default {
  name: "App",
  inject: ["supabase"],
  methods: {
    async checkup() {
      try {
        // const response = await axios.get(`/api/location`);
        // console.log(response);
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    this.checkup();
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap");
</style>
