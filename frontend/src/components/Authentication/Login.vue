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
        console.log(response.data.session, response.data.user);
        // if (error) {
        //   console.log(`SignIn error: ${error}`);
        // }
        // if (user) {
        //   console.log("Signed in user: ", user, session);
        // }
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
