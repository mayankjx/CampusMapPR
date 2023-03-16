<template>
  <div class="container">
    <c-box w="100%" h="10%" fontFamily="heading">
      <Navbar></Navbar>
    </c-box>
    <c-flex w="100%" h="85vh">
      <c-box w="20%" h="100%" bg="red.300">
        <Sidebar></Sidebar>
      </c-box>
      <c-box rounded="lg" w="80%" h="100%">
        <MapContainer></MapContainer>
      </c-box>
    </c-flex>
  </div>
  <!-- <div class="container">
    <div class="navbar">
      <Navbar></Navbar>
    </div>
    <div class="map">
      <MapContainer></MapContainer>
    </div>
  </div> -->
</template>

<script>
// @ is an alias to /src
import { CFlex, CBox } from "@chakra-ui/vue";
import { CGrid, CGridItem, CSimpleGrid } from "@chakra-ui/vue";
import Navbar from "../components/Navbar.vue";
import MapContainer from "../components/MapContainer.vue";
import Sidebar from "../components/Sidebar.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    MapContainer,
    Sidebar,
    CBox,
    CGrid,
    CGridItem,
    CSimpleGrid,
    CFlex,
  },
};
</script>

<style>
.container {
  height: 100vh;
  width: 100vw;
  padding: 10px;
  box-sizing: border-box;
  /* position: relative; */
}

.map {
  height: 80%;
  width: 100%;
}
</style>
