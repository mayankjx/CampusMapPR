import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isAuthenticated: false,
    userRole: null,
  },
  mutations: {
    setAuthenticationStatus(state, isAuthenticated) {
      state.isAuthenticated = isAuthenticated;
    },
    setUserRole(state, userRole) {
      state.userRole = userRole;
    },
  },
  actions: {
    setAuthenticationStatus({ commit }, isAuthenticated) {
      commit("setAuthenticationStatus", isAuthenticated);
    },
    setUserRole({ commit }, userRole) {
      commit("setUserRole", userRole);
    },
  },
  getters: {
    isAuthenticated: (state) => state.isAuthenticated,
    userRole: (state) => state.userRole,
  },
});
