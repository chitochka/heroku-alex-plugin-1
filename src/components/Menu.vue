<template>
  <!-- <v-container > -->
     <v-app-bar color="deep-purple"  dense  flat      dark      >
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
          <v-toolbar-title> </v-toolbar-title>
          <v-spacer></v-spacer>

        <v-btn icon><v-icon color="red">mdi-flag-variant-outline</v-icon></v-btn>
        <v-btn icon><v-icon >mdi-currency-kzt</v-icon></v-btn>
        <v-btn icon><v-icon>mdi-arrow-collapse-up</v-icon></v-btn>
      </v-app-bar>
  <!-- </v-container> -->

</template>




<script>
  export default {
    data () {
      return {
        items: [
          { title: 'Dashboard', icon: 'mdi-view-dashboard' },
          { title: 'Photos', icon: 'mdi-image' },
          { title: 'About', icon: 'mdi-help-box' },
        ],
        right: null,
      }
    },
  }
</script>