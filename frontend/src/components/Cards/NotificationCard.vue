<template>
  <div class="notificationArea">
    <p class="notification">Notifications</p>
    <c-stack>
      <c-box shadow="md" border-width="1px" p="10px"
        >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae at
        nulla voluptas vel laborum quia illo!</c-box
      >
      <c-box shadow="md" border-width="1px" p="10px"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit.</c-box
      >
      <c-box shadow="md" border-width="1px" p="10px"
        >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
        nihil, cumque numquam ratione odio fugiat labore, corporis iusto
        delectus, earum accusamus nesciunt officia.</c-box
      >
      <c-box shadow="md" border-width="1px" p="10px"
        >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
        nihil, cumque numquam ratione odio fugiat labore, corporis iusto
        delectus, earum accusamus nesciunt officia.</c-box
      >
      <c-box shadow="md" border-width="1px" p="10px"
        >Lorem ipsum dolor sit.</c-box
      >
      <c-box shadow="md" border-width="1px" p="10px"
        >Lorem ipsum dolor sit amet.</c-box
      >
    </c-stack>
  </div>
</template>

<script>
// import { CStack, CBox } from "@chakra-ui/vue";
</script>

<style>
:root {
  --var-heading: normal normal 600 1.5em/1.6em "Outfit", sans-serif;
}
.notificationArea {
  border: 1px solid black;
  padding: 5px;
  max-height: 560px;
  overflow-y: auto;
}

.notification {
  font: var(--var-heading);
  padding-bottom: 0.7em;
}
</style>
