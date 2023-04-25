<template>
  <div id="mapContainer">
    <MglMap
      :accessToken="accessToken"
      :mapStyle="style"
      :center="center"
      :zoom="zoom"
      :pitch="pitch"
      :hash="hash"
    >
      <MglNavigationControl position="top-right"></MglNavigationControl>
      <MglMarker
        v-for="marker in markers"
        :key="marker.location_id"
        :coordinates="marker.coordinates"
        @click="handleMarkerClick(marker)"
      >
        <MglPopup><MiniPopup :marker="marker"></MiniPopup> </MglPopup>
      </MglMarker>
    </MglMap>
  </div>
</template>

<script>
import Mapbox from "mapbox-gl";
import { MglMap, MglNavigationControl, MglMarker, MglPopup } from "vue-mapbox";
import MiniPopup from "./MiniPopup.vue";

export default {
  components: {
    MglMap,
    MglNavigationControl,
    MglMarker,
    MglPopup,
    MiniPopup,
  },
  data() {
    return {
      mapData: null,
      accessToken:
        "pk.eyJ1IjoibWF5YW5rLWo2MTkiLCJhIjoiY2t0bjY3cWs0MDJiNzJwdGluZ29veW83OCJ9.ILceh4WZaH1WomhH_ZBAUw",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [80.0208289, 23.1764312],
      zoom: 16,
      pitch: 36,
      hash: true,
      markers: [
        {
          location_id: 1,
          title: "Hall 3",
          description: "Boys hall of residence",
          coordinates: [80.0218892, 23.1757697],
          x_cord: 23.1757697,
          y_cord: 80.0218892,
          visibility: 1,
        },
        {
          location_id: 2,
          title: "Football Ground",
          description: "Football ground merged with cricket ground",
          coordinates: [80.0221494, 23.1759937],
          x_cord: 23.1759937,
          y_cord: 80.0221494,
          visibility: 1,
        },
      ],
    };
  },
  methods: {
    handleMarkerClick(marker) {
      console.log(`You clicked on marker with id: ${marker.location_id}`);
      let data = {
        lng: marker.coordinates[0],
        lat: marker.coordinates[1],
      };
      // this.flyToLocation(data);
    },
  },
  mounted() {
    this.mapbox = Mapbox;
  },
};
</script>

<style>
#mapContainer {
  height: 100%;
  border-radius: 2.5rem;
  overflow: hidden;
}

.mapboxgl-popup-content {
  max-height: 500px;
  max-width: 500px;
  border-radius: 20px;
  padding: 15px;
}

.mapboxgl-popup-close-button {
  display: none;
}
</style>
