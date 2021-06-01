<template>
  <!-- <v-container > -->
     <v-app-bar color="deep-purple"  dense  flat      dark      >
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
          <v-toolbar-title> </v-toolbar-title>
          <!-- <v-spacer></v-spacer> -->
          <v-btn icon v-for="item in items" :key="item.icon"><v-icon >{{item.icon}}</v-icon></v-btn>
<hr/>
        <!-- <v-btn icon><v-icon >mdi-flag-variant-outline</v-icon></v-btn> -->
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
          { icon: 'mdi-view-dashboard' },
          { icon: 'mdi-image' },
          { icon: 'mdi-help-box' },
        ],
        right: null,
      }
    },
  }
</script>