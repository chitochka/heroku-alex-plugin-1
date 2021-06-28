<template>
  <div>
    <template>
      <div>
        <v-container class="pt-4 mt-5 pl-5">
         <v-card outlined elevation="2">
           <v-card-text>
            <MaxMinSlider :data="width"></MaxMinSlider>
            <MaxMinSlider :data="opacity"></MaxMinSlider>
           </v-card-text>

          </v-card>
        </v-container>
      </div>
    </template>
  </div>
</template>

<script>
import MaxMinSlider from './MaxMinSlider.vue'

export default {
  data() {
    return {
      width: {
        min: 200,
        max: 400,
        slider: 250,
        label : "Šířka Tlacitka"
      },
      opacity: {
        min: 200,
        max: 600,
        slider: 330,
        label : "pruhlednost",
        measure:"%"
      },
    };
  },
  components : {MaxMinSlider}
};
</script>

