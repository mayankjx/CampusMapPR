import Vue from "vue";
import App from "./App.vue";
import { makeServer } from "./server";
import router from "./router";
import Chakra, { CThemeProvider, CReset } from "@chakra-ui/vue";
import mainTheme from "./mainTheme";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faNotesMedical,
  faMagnifyingGlass,
  faBowlFood,
  faBuilding,
} from "@fortawesome/free-solid-svg-icons";

// using custom icons svg and adding them to library
library.add(faNotesMedical, faMagnifyingGlass, faBowlFood, faBuilding);

import Mapbox from "mapbox-gl";
import VueMapbox from "vue-mapbox";

Vue.use(VueMapbox, { mapboxgl: Mapbox });

Vue.use(Chakra, {
  extendTheme: mainTheme,
});

Vue.config.productionTip = false;

// mock server
if (process.env.NODE_ENV === "development") {
  // makeServer();
}

Vue.component("font-awesome-icon", FontAwesomeIcon);

new Vue({
  router,
  render: (h) => h(CThemeProvider, [h(CReset), h(App)]),
}).$mount("#app");
