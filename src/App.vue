<template>
  <v-app id="vuetify">
    <Drawer />
    <Navbar />
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import Drawer from "./components/Drawer";
import Navbar from "./components/Navbar";
export default {
  name: "App",
  components: {
    Drawer,
    Navbar
  },
  data: () => ({
    drawer: null
  }),
  created: function() {},
  methods: {}
};
</script>

<style lang="scss">
#vuetify {
  background: #242940;
}
a {
  text-decoration: none;
  text-shadow: 0 2px 3px rgba(246, 73, 167, 0.5);
  font-weight: 800;
  transition: all 0.3s ease-in;
  position: relative;
}
</style>
