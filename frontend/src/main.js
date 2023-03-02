import process from "process";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { makeServer } from "./server";
// import { Server } from "miragejs";

// comment this out when changing from mock server to real server
makeServer();

createApp(App).use(router).mount("#app");
