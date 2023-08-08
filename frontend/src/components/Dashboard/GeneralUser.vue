<template>
  <div class="generalUserDashboard">
    <Navbar></Navbar>
  </div>
</template>

<script>
import Navbar from "../Navbar.vue";

import axios from "axios";
export default {
  components: {
    Navbar,
  },
  data() {
    return {};
  },
  methods: {},
  async created() {
    try {
      const token = sessionStorage.getItem("token");
      const res = await axios.get("/api/user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res) {
        console.log(res);
      }
    } catch (error) {
      console.log(error);
    }
  },
};
</script>
