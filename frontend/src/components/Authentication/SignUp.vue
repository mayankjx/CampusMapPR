<template>
  <div class="signUpForm">
    <form @submit.prevent="submitForm" class="sign-up-form">
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
      <c-button type="submit" colorScheme="blue" mt="4" fontFamily="heading">
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
    submitForm() {
      // Here, you can add your logic to send the form data to the server or perform any desired actions.
      console.log("Form submitted with data:", this.formData);
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
