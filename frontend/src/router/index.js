import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store/index";

// components
import Home from "../views/Home.vue";
import Auth from "../components/Authentication/Auth.vue";
import GeneralUser from "../components/Dashboard/GeneralUser.vue";
import EventOrganizer from "../components/Dashboard/EventOrganizer.vue";
import ServiceProvider from "../components/Dashboard/ServiceProvider.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Auth",
    component: Auth,
  },
  {
    path: "/general-user/dashboard",
    name: "GeneralUser",
    component: GeneralUser,
    meta: {
      requiresAuth: true,
      user_role: "general",
    },
  },
  {
    path: "/map",
    name: "Map",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    const authState = sessionStorage.getItem("isAuthenticated");
    if (authState) {
      next();
    } else {
      console.log("Not authenticated");
      next("/");
    }
  } else {
    next();
  }
});

export default router;
