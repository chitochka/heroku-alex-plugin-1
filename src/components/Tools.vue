<template>
  <v-card class="rounded-0">
    <v-toolbar  flat color="blue darken-4" dark>
      <v-toolbar-title> {{title}}</v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- <v-btn @click="save" elevation="8" color="#40cc40" tile>  Uložit  </v-btn> -->
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
            <ToolsSlovnik></ToolsSlovnik>            
        </v-card>
      </v-tab-item>

      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <p>Suspendisse feugiat. Suspendisse faucibus, nunc et pelle<br/>ntesque egestas, lacus ante </p>
          </v-card-text>
        </v-card>
      </v-tab-item>

      <v-tab-item>
        <v-card flat>
          <ToolsScrollUp></ToolsScrollUp>
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

import dict from '../temp/index.js'
import {sysTls} from '../helpers/i18n.js'
import ToolsSlovnik from './tools/ToolsSlovnik'
import ToolsScrollUp from './tools/ToolsScrollUp'

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
        methods:{
          save(){}
        },
        components: {ToolsSlovnik, ToolsScrollUp}
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