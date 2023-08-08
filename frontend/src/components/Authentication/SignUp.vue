<template>
  <div class="signUpForm">
    <form class="sign-up-form">
      <CHeading size="lg">Create Your Account</CHeading>
      <CFormControl>
        <CFormLabel for="firstName" fontFamily="heading">First Name</CFormLabel>
        <CInput
          id="firstName"
          v-model="formData.firstName"
          fontFamily="heading"
          required
          placeholder="First Name"
        />
      </CFormControl>
      <CFormControl>
        <CFormLabel for="lastName" fontFamily="heading">Last Name</CFormLabel>
        <CInput
          id="lastName"
          v-model="formData.lastName"
          fontFamily="heading"
          required
          placeholder="Last Name"
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
import axios from "axios";
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
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async handleSignUp() {
      try {
        const supabase = require("../../lib/supabaseClient");
        const res = await supabase.supabase.auth.signUp({
          email: this.formData.email,
          password: this.formData.password,
        });
        console.log(res);
        if (res.data.error) {
          console.log(`SignUp error: ${res.data.error}`);
        } else {
          let userObj = {
            UserID: Math.floor(Math.random() * 1000000),
            UserUUID: res.data.user.id,
            FirstName: this.formData.firstName,
            LastName: this.formData.lastName,
            UserType: "general",
          };
          this.signUpRequest(userObj, res.data.session);
          console.log(res.data.user, res.data.session);
        }
      } catch (error) {
        console.log(`Error during sign up: ${error}`);
      }
    },

    async signUpRequest(userObj, session) {
      try {
        const reqBody = {
          userObj: userObj,
          session: session,
        };
        const res = await axios.post("/api/signup", reqBody);

        console.log(res.data);

        if (res.data) {
          const token = res.data.jwt;
          const isAuth = true;
          document.cookie = `jwt=${token}; HttpOnly; Secure; SameSite=Strict`;
          this.$store.commit("setAuthenticationStatus", isAuth);
          this.$store.commit("setUserRole", res.data.UserType);
        }
      } catch (error) {
        console.log(error);
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
