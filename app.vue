<template>
  <v-app :theme="useMainStore().theme">
    <NuxtPage></NuxtPage>
  </v-app>
</template>

<script>
import {useMainStore} from "/store/index.js";

export default {
  name: "app",
  methods: {useMainStore}
}
</script>

<style scoped>

</style>
