// Vue imports
import Vue from "vue";
import App from "./App.vue";
import router from "./router";

// chakra lib
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

// supabase import
const supabase = require("./lib/supabaseClient");

// using custom icons svg and adding them to library
library.add(faNotesMedical, faMagnifyingGlass, faBowlFood, faBuilding);

// Mapbox lib
import Mapbox from "mapbox-gl";
import VueMapbox from "vue-mapbox";
import store from './store'

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
  provide: {
    supabase,
  },

  router,
  store,
  render: (h) => h(CThemeProvider, [h(CReset), h(App)])
}).$mount("#app");

Vue.prototype.$supabase = supabase;
