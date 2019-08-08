<template>
  <v-app id="vuetify">
    <Loader />
    <Drawer />
    <Navbar />
    <v-content>
      {{ isPhone }}
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import { mapState } from "vuex";
import Loader from "./components/common/Loader";
import Drawer from "./components/Drawer";
import Navbar from "./components/Navbar";

export default {
  name: "App",
  computed: {
    ...mapState({
      isPhone: state => state.ui.isPhone
    })
  },
  components: {
    Drawer,
    Navbar,
    Loader
  },
  data: () => ({}),
  created() {
    window.addEventListener("resize", this.handleWindowResize);
  },
  methods: {
    handleWindowResize() {
      const width = window.innerWidth;
      this.$store.dispatch(
        "ui/handleWindowSize",
        width < this.$constant.PHONE_SIZE
      );
    }
  }
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
