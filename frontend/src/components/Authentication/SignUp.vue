<template>
  <div class="signUpForm">
    <form class="sign-up-form">
      <CHeading size="lg">Sign Up</CHeading>
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
        @click="handleSignUp"
        colorScheme="blue"
        mt="4"
        fontFamily="heading"
      >
        Sign Up
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
    async handleSignUp() {
      try {
        const supabase = require("../../lib/supabaseClient");
        const { user, session, error } = await supabase.supabase.auth.signUp({
          email: this.formData.email,
          password: this.formData.password,
        });
        if (error) {
          console.log(`SignUp error: ${error}`);
        } else {
          console.log(user, session);
        }
      } catch (error) {
        console.log(`Error during sign up: ${error}`);
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
.signUpForm {
  height: 70%;
  width: 50%;
  margin: auto;
}
</style>
