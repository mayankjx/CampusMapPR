import process from "process";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { makeServer } from "./server";
// import { Server } from "miragejs";
// console.log(process.env.NODE_ENV);
makeServer();

createApp(App).use(router).mount("#app");
