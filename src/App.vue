<template>
  <v-app app>

    <v-main>
      <v-container >

        <v-card >
          <v-tabs  v-model="tab"  background-color="deep-purple accent-4"  centered  dark  icons-and-text>
            <v-tabs-slider></v-tabs-slider>
            <v-tab v-for="item in tabItems" :key="item.href" v-if="item.href" :href="'#'+item.href">
                {{item.href }}
                <v-icon :dense="item.href === 'tools'" >{{item.icon}} </v-icon> 
            </v-tab>
         
            <v-divider v-else  inset  vertical></v-divider>

          </v-tabs>

          <v-tabs-items v-model="tab">
            <v-tab-item :value="'slovnik' ">
               <Slovnik></Slovnik>
            </v-tab-item>

            <v-tab-item :value="'kurzy' ">
               <Kurzy></Kurzy>
            </v-tab-item>
            <v-tab-item :value="'slider' ">
               <Slider></Slider>
            </v-tab-item>
        
            <v-tab-item :value="'tools' ">
               <Tools></Tools>
            </v-tab-item>
          </v-tabs-items>

        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>


<script>
// import MyMenu from "./components/Menu.vue";
import Slovnik from "./components/Slovnik.vue";
import Kurzy from "./components/Kurzy.vue";
import Slider from "./components/Slider.vue"
import Tools from './components/Tools.vue'
import i18n from './helpers/i18n.js'

export default {
  name: "app",
  data() {
    return {
      // right: null,
      text: 'lopem',
      tab: null,
      tabItems :  [
        { href:"slovnik", icon: 'mdi-flag-variant-outline', a : Slovnik },
        { href:"kurzy",   icon: 'mdi-currency-kzt' },
        { href:"slider",  icon: 'mdi-arrow-collapse-up' },
        {},
        { href:"tools",  icon: 'mdi-tools' },
      ],
    };
  },
  computed:{
  },
  components: { Slovnik, Kurzy , Slider, Tools},
  created() {},
  mounted() {
    window.vv = this
  },
};
</script>




<style scoped>
</style>