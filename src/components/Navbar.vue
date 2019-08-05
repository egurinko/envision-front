<template>
  <v-app-bar id="appBar" flat app clipped-left color="backgroud">
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
    <v-toolbar-title>APP NAME</v-toolbar-title>
  </v-app-bar>
</template>

<script>
export default {
  name: "Navbar",
  data: () => ({}),
  created() {},
  methods: {}
};
</script>

<style lang="scss" scoped>
#appBar {
  border-bottom: solid 1px #99c5c9 !important;
}
</style>
