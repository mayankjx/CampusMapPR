<template>
  <div id="mapContainer">
    <MglMap
      :accessToken="accessToken"
      :mapStyle="style"
      :center="center"
      :zoom="zoom"
      :pitch="pitch"
      :hash="hash"
    ></MglMap>
  </div>
</template>

<script>
import Mapbox from "mapbox-gl";
import { MglMap } from "vue-mapbox";

export default {
  components: {
    MglMap,
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
          x_cord: 23.1757697,
          y_cord: 80.0218892,
          visibility: 1,
        },
        {
          location_id: 1,
          title: "Football Ground",
          description: "Football ground merged with cricket ground",
          x_cord: 23.1759937,
          y_cord: 80.0221494,
          visibility: 1,
        },
      ],
    };
  },
  methods: {
    flyToLocation(data) {
      if (data != null) {
        new mapboxgl.Marker({ color: "black", scale: "2" })
          .setLngLat({ lng: data.lng, lat: data.lat })
          .addTo(this.mapData);
        this.mapData.flyTo({
          center: [data.lng, data.lat],
          zoom: 12,
          speed: 1.6,
          curve: 1,
          easing(t) {
            return t;
          },
        });
      }
    },
  },
  mounted() {
    this.mapbox = Mapbox;
  },
  updated() {
    this.flyToLocation(this.location);
  },
};
</script>

<style>
#mapContainer {
  height: 100%;
  border-radius: 2.5rem;
  overflow: hidden;
}
</style>
