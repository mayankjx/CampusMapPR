<template>
  <div class="minipopup">
    <c-box>
      <img src="../assets/iiit.jpg" alt="" srcset="" />
      <c-text fontWeight="bold" fontFamily="heading" fontSize="sm" ml="1">{{
        marker.title
      }}</c-text>
      <button class="minipopup_btn">See details</button>
    </c-box>
  </div>
</template>

<script>
import { CBox, CImage, CFlex } from "@chakra-ui/vue";

export default {
  props: {
    marker: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
  },
  methods: {
    openBigPopup() {},
  },
};
</script>

<style>
.minipopup img {
  max-width: 220px;
  margin-bottom: 10px;
  border-radius: 15px;
}

.minipopup_btn {
  font-family: "Montserrat";
  padding: 10px 15px;
  border: 1px solid black;
  border-radius: 10px;
  margin: auto;
  width: 100%;
  margin-top: 10px;
}
</style>
