import Vue from "vue";
import App from "./App.vue";
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

library.add(faNotesMedical, faMagnifyingGlass, faBowlFood, faBuilding);

Vue.use(Chakra, {
  extendTheme: mainTheme,
});

Vue.config.productionTip = false;

Vue.component("font-awesome-icon", FontAwesomeIcon);

new Vue({
  router,
  render: (h) => h(CThemeProvider, [h(CReset), h(App)]),
}).$mount("#app");
