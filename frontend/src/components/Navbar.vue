<template>
  <div class="navbar">
    <CFlex align="center" h="100%" w="100%">
      <CFlex w="20%" p="5" pl="10">
        <h1>College Map</h1>
      </CFlex>
      <CFlex w="50%" p="5">
        <c-input-group w="100%">
          <c-input-left-element
            color="gray.300"
            fontSize="1.2em"
          ></c-input-left-element>
          <c-input placeholder="Search" size="lg" fontFamily="heading" />
        </c-input-group>
      </CFlex>
      <CFlex w="30%" p="5" justify="flex-end">
        <c-box
          as="button"
          rounded="md"
          bg="primary"
          color="white"
          px="4"
          h="8"
          v-if="!isAuthenticated"
          @click="navigateLogin"
        >
          Login
        </c-box>
        <c-box
          as="button"
          rounded="md"
          bg="primary"
          color="white"
          px="4"
          h="8"
          v-if="isAuthenticated"
          @click="navigateDashboard"
        >
          Dashboard
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
    return {
      isAuthenticated: false,
    };
  },
  created() {
    const authState = sessionStorage.getItem("isAuthenticated");
    if (authState == true) {
      this.isAuthenticated = true;
    } else {
      this.isAuthenticated = false;
    }
    console.log(typeof authState);
  },
  methods: {
    navigateDashboard() {
      this.$router.push("/general-user/dashboard");
    },

    navigateLogin() {
      this.$router.push("/");
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
