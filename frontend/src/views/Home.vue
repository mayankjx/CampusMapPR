<template>
  <div class="container">
    <div class="navbar">
      <Navbar></Navbar>
    </div>
    <div class="mapContainer">
      <MapContainer></MapContainer>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "../components/Navbar.vue";
import MapContainer from "../components/MapContainer.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    MapContainer,
  },
};
</script>
