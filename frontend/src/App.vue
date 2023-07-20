<template>
  <router-view />
</template>

<script>
export default {
  name: "App",
  inject: ["supabase"],
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap");
</style>
