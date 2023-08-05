<template>
  <div class="signInForm">
    <form class="sign-up-form">
      <CHeading size="lg">Sign In</CHeading>
      <CFormControl>
        <CFormLabel for="username" fontFamily="heading">Username</CFormLabel>
        <CInput
          id="username"
          v-model="formData.username"
          fontFamily="heading"
          required
          placeholder="Enter your username"
        />
      </CFormControl>
      <CFormControl>
        <CFormLabel for="email" fontFamily="heading">Email</CFormLabel>
        <CInput
          id="email"
          v-model="formData.email"
          fontFamily="heading"
          required
          type="email"
          placeholder="Enter your email"
        />
      </CFormControl>
      <CFormControl>
        <CFormLabel for="password" fontFamily="heading">Password</CFormLabel>
        <c-input
          id="password"
          v-model="formData.password"
          fontFamily="heading"
          required
          type="password"
          placeholder="Enter your password"
        />
      </CFormControl>
      <c-button
        @click="handleSignIn"
        colorScheme="blue"
        mt="4"
        fontFamily="heading"
      >
        Sign In
      </c-button>
    </form>
  </div>
</template>

<script>
import {
  CFormControl,
  CFormLabel,
  CInput,
  CButton,
  CHeading,
} from "@chakra-ui/vue";

export default {
  data() {
    return {
      formData: {
        username: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async handleSignIn() {
      try {
        const supabase = require("../../lib/supabaseClient");
        const response = await supabase.supabase.auth.signInWithPassword({
          email: this.formData.email,
          password: this.formData.password,
        });
        if (response.error) {
          console.log(`Error during login: ${error}`);
        }
        if (response.data) {
          console.log(response.data.session, response.data.user);
          const token = response.data.session.access_token;
          const isAuth = true;
          sessionStorage.setItem("token", token);
          sessionStorage.setItem("isAuthenticated", isAuth);

          this.$router.push("/general-user/dashboard");
        }

        console.log(this.$store.getters.isAuthenticated);
      } catch (error) {
        console.log(`Error during sign in: ${error}`);
      }
    },
  },
  components: {
    CFormControl,
    CFormLabel,
    CInput,
    CButton,
    CHeading,
  },
};
</script>

<style>
.signInForm {
  height: 70%;
  width: 50%;
  margin: auto;
}
</style>
