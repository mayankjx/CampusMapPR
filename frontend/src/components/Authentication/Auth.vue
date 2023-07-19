<template>
  <div v-if="signUp">
    <SignUp></SignUp>
  </div>
</template>

<script>
import SignUp from "./SignUp.vue";
export default {
  name: "Auth",
  components: { SignUp },
  data() {
    return {
      signUp: true,
    };
  },
};
</script>
