<template>
  <c-box m="5" rounded="lg" bg="orange.300">
    <c-box fontFamily="heading">
      <c-text fontWeight="bold" fontFamily="heading" fontSize="xs"
        >Quick Searches</c-text
      >
      <c-stack fontSize="sm" pl="2" mt="2">
        <c-flex justify="flex-start">
          <c-box>Icon</c-box>
          <c-text fontFamily="heading" pl="2">Healthcare</c-text>
        </c-flex>
        <c-flex justify="flex-start">
          <c-box>Icon</c-box>
          <c-text fontFamily="heading" pl="2">Food Corners</c-text>
        </c-flex>
        <c-flex justify="flex-start" align="center">
          <c-box>Icon</c-box>
          <c-text fontFamily="heading" pl="2">Academic Office</c-text>
        </c-flex>
      </c-stack>
    </c-box>
  </c-box>
</template>

<script>
import { CBox, CText, CStack, CFlex } from "@chakra-ui/vue";

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
