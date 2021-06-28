<template>
  <div>
    <template>
      <div>
        <v-container class="pt-4 mt-5 pl-5">
         <v-card outlined elevation="2">
           <v-card-text>
            <MaxMinSlider @change="onChange('width')" :data="slovnik_width"></MaxMinSlider>
            <MaxMinSlider @change="onChange('height')" :data="slovnik_height"></MaxMinSlider>
           </v-card-text>
          </v-card>
        </v-container>
      </div>
    </template>
  </div>
</template>

<script>
import MaxMinSlider from './MaxMinSlider.vue'
import {mapGetters, mapMutations} from 'vuex'

export default {
  components : {MaxMinSlider},
  computed: mapGetters(['slovnik_width','slovnik_height']),
  methods:{
    ...mapMutations(['SET_SLOVNIK_WIDTH','SET_SLOVNIK_HEIGHT']),
    onChange(args){
      this['SET_SLOVNIK_' + args.toUpperCase()]( this['slovnik_' + args])
    }
  },
  mounted(){
  }

};
</script>

