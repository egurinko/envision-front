<template>
  <v-navigation-drawer id="drawer" app clipped color="backgroud">
    <v-list dense class="mx-5 my-5 pl-2">
      <v-list-item class="link mb-2" @click="handleClick()">
        <v-list-item-action>
          <v-icon>dashboard</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <a class="secondary--text">Dashboard</a>
        </v-list-item-content>
      </v-list-item>
      <v-list-item class="link" @click="handleClick('settings')">
        <v-list-item-action>
          <v-icon>settings</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <a class="secondary--text">Settings</a>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "Drawer",
  data: () => ({}),
  created() {},
  methods: {
    handleClick(route = "/") {
      this.$router.push(route);
    }
  }
};
</script>

<style lang="scss" scoped>
#drawer {
  border-right: solid 0.5px #99c5c9 !important;
}
</style>
