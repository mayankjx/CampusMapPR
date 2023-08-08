<template>
  <div>
    <button @click="switchAuth">{{ current }}</button>
    <div v-if="signUp">
      <SignUp></SignUp>
    </div>
    <div v-if="!signUp">
      <Login></Login>
    </div>
  </div>
</template>

<script>
import SignUp from "./SignUp.vue";
import Login from "./Login.vue";
export default {
  name: "Auth",
  components: { SignUp, Login },
  data() {
    return {
      signUp: true,
      current: "Sign Up",
    };
  },
  methods: {
    switchAuth() {
      this.signUp = !this.signUp;
      if (this.signUp) {
        this.current = "Sign Up";
      } else {
        this.current = "Sign In";
      }
    },
  },
};
</script>
