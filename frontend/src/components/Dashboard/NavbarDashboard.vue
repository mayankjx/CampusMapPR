<template>
  <div class="navbar">
    <CFlex
      align="center"
      justify-content="space-between
    "
      h="100%"
      w="100%"
    >
      <CFlex w="20%" p="5" pr="70">
        <h1>College Map</h1>
      </CFlex>
      <CFlex w="30%" p="5" justify="flex-end">
        <c-box
          as="button"
          rounded="md"
          bg="white"
          mr="10px"
          pr="15px"
          borderColor="primary"
          borderWidth="1px"
          color="primary"
          px="4"
          h="8"
          @click="navigateToMap"
        >
          Map
        </c-box>
        <c-box
          as="button"
          rounded="md"
          bg="primary"
          color="white"
          px="4"
          h="8"
          @click="logout"
        >
          Logout
        </c-box>
      </CFlex>
    </CFlex>
  </div>
</template>

<script>
import { CFlex, CBox } from "@chakra-ui/vue";
import { CInput, CInputGroup, CInputLeftElement } from "@chakra-ui/vue";

export default {
  components: {
    CFlex,
    CBox,
    CInput,
    CInputGroup,
    CInputLeftElement,
  },
  data() {
    return {};
  },
  methods: {
    navigateToMap() {
      this.$router.push("/map");
    },
    async logout() {
      const supabase = require("../../lib/supabaseClient");
      try {
        const { error } = await supabase.supabase.auth.signOut();
        if (error) {
          console.error("Logout error:", error.message);
          return;
        }
        sessionStorage.setItem("token", "");
        sessionStorage.setItem("isAuthenticated", false);
        this.$router.push("/map");
      } catch (error) {
        console.error("Logout error:", error.message);
      }
    },
  },
};
</script>

<style>
.navbar {
  height: 100%;
  width: 100%;
}
</style>
