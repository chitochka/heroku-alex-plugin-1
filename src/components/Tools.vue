<template>
  <v-card class="rounded-0">
    <v-toolbar  flat color="blue darken-4" dark>
      <v-toolbar-title> {{title}}</v-toolbar-title>
     <v-spacer></v-spacer>
      <v-btn elevation="8" color="#40cc40" tile>  Ulozit </v-btn>
    </v-toolbar>

    <v-tabs v-model="tab" vertical>
      <v-tab class="mx-0 my-0 narrow-tab" >
        <v-icon  large  left> mdi-flag-variant-outline </v-icon>
      </v-tab>

      <v-tab class="mx-0 my-0 narrow-tab">
        <v-icon large left> mdi-currency-kzt </v-icon>
      </v-tab>

      <v-tab class="mx-0 my-0 narrow-tab">
        <v-icon large  left> mdi-publish </v-icon>
      </v-tab>

      <v-tab class="mx-0 my-0 narrow-tab">
        <v-icon  large left> mdi-cogs </v-icon>
      </v-tab>

      <v-tab-item>
        <v-card flat>
          <!-- <v-card-text> -->
            <SlovnikTools></SlovnikTools>            
          <!-- </v-card-text> -->
        </v-card>
      </v-tab-item>

      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <p>Suspendisse feugiat. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante </p>
          </v-card-text>
        </v-card>
      </v-tab-item>

      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <p>Fusce a quam. Phasellus nec sem in justo pellentesque facilisis</p>
          </v-card-text>
        </v-card>
      </v-tab-item>

      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <p>Nastaveni</p>
          </v-card-text>
        </v-card>
      </v-tab-item>


    </v-tabs>
  </v-card>
  
</template>

<script>

import dict from '../store/index.js'
import {sysTls} from '../helpers/i18n.js'
import SlovnikTools from './tools/slovnikTools.vue'

    export default {
        data(){
          return {
            tab : null,
            tabTitle : ["Nastaveni slovnika","Nastaveni Men","Nastaveni Slider","Nastaveni App"]
          }
        },
        computed :{
          title () { return this.tabTitle[this.tab] }
        },
        components: {SlovnikTools}
    }
</script>

<style  scoped>

.narrow-tab{
  min-width: 55px !important;
  padding: 40px 20px !important;
  background-color: rgb(150, 150, 211);
  /* border-right: 3px dotted rgb(6, 105, 211); */
}
.v-tab--active{
    /* background-color: rgb(255, 255, 255); */
    background-color: rgb(220, 220, 250);
    /* border: 3px solid rgb(14, 85, 240); */
    border-right: none;
  /* padding: 30px 20px !important; */
}

</style>