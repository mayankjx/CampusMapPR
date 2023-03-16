<template>
  <c-box m="5" rounded="lg" fontFamily="heading" color="light">
    <c-box>
      <c-text fontWeight="bold" fontFamily="heading" fontSize="xs"
        >Quick Searches</c-text
      >
      <c-stack fontSize="sm" pl="2" mt="2">
        <c-flex justify="flex-start">
          <c-box><font-awesome-icon icon="fa-solid fa-notes-medical" /></c-box>
          <c-text fontFamily="heading" pl="2">Healthcare</c-text>
        </c-flex>
        <c-flex justify="flex-start">
          <c-box><font-awesome-icon icon="fa-solid fa-bowl-food" /> </c-box>
          <c-text fontFamily="heading" pl="2">Food Corners</c-text>
        </c-flex>
        <c-flex justify="flex-start" align="center">
          <c-box><font-awesome-icon icon="fa-solid fa-building" /></c-box>
          <c-text fontFamily="heading" pl="2">Academic Office</c-text>
        </c-flex>
      </c-stack>
    </c-box>
    <c-box mt="10" w="80%">
      <c-text fontWeight="bold" fontFamily="heading" fontSize="xs"
        >Find a faculty</c-text
      >
      <c-input
        placeholder="Search"
        size="xs"
        fontFamily="heading"
        p="2"
        m="2"
        fontSize="xs"
      />
    </c-box>
  </c-box>
</template>

<script>
import { CBox, CText, CStack, CFlex } from "@chakra-ui/vue";
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  components: {
    CBox,
    CText,
    CStack,
    CFlex,
  },
};
</script>

<style></style>
