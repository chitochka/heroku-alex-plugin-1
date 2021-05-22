<template>
  <v-app app>

    <v-main>
      <v-container >

        <v-card >
          <v-tabs  v-model="tab"  background-color="deep-purple accent-4"  centered  dark  icons-and-text>
            <v-tabs-slider></v-tabs-slider>
            <v-tab href="#slovnik">    Slovnik    <v-icon>mdi-flag-variant-outline</v-icon>  </v-tab>
            <v-tab href="#kurzy">    KZT - CZK    <v-icon>mdi-currency-kzt</v-icon>  </v-tab>
            <v-tab href="#slider">    Slider    <v-icon>mdi-arrow-collapse-up</v-icon>  </v-tab>
            <v-divider  inset  vertical></v-divider>
            <v-tab href="#tools">    Tools    <v-icon>mdi-tools</v-icon>  </v-tab>

          </v-tabs>
          <v-tabs-items v-model="tab">
            <!-- <v-tab-item v-for="i in 3" :key="i" :value="'tab-' + i">
              <v-card flat><v-card-text>{{ text }}</v-card-text></v-card>
            </v-tab-item> -->
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
import MyMenu from "./components/Menu.vue";
import Slovnik from "./components/Slovnik.vue";
import Kurzy from "./components/Kurzy.vue";
import Slider from "./components/Slider.vue"
import Tools from './components/Tools.vue'

export default {
  name: "app",
  data() {
    return {
      right: null,
      tab: null,
      text: 'lopem'
    };
  },
  components: { Slovnik, MyMenu, Kurzy , Slider, Tools},
  created() {},
  mounted() {},
};
</script>




<style scoped>
</style>