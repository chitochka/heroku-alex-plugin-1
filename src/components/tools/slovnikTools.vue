<template>
  <div>
    <template>
      <div>
        <v-container class="pt-4 mt-5 pl-5">
         <v-card outlined elevation="2">
           <v-card-text>
          <v-row dense>
            <v-col cols="9">
              <v-slider label="Sirka okna" 
                dense thumb-label   persistent-hint      v-model="height.slider"   :max="height.max"   :min="height.min"   class="align-center"  ></v-slider>
            </v-col>

            <v-col cols="3"> 
              <v-text-field v-model="height.slider"      class=""     single-line       style=""    dense outlined         suffix="px"           >
              </v-text-field>
            </v-col>
          </v-row>




          <v-row dense >
            <v-col cols="9">
              <v-slider label="Vyska okna" 
                dense thumb-label   persistent-hint      v-model="width.slider"   :max="width.max"   :min="width.min"   class="align-center"
              >
              </v-slider>
            </v-col>

            <v-col cols="3"> 
              <v-text-field v-model="width.slider"    class="mt-0 pt-0"        single-line     style=""    dense outlined   suffix="px"                 >
              </v-text-field>
            </v-col>
          </v-row>
           </v-card-text>


 <!-- <v-spacer></v-spacer>
<v-btn large elevation="8" color="primary">  Ulozit </v-btn> -->
          <!-- <v-row  >
            <v-col cols="2" >
                  <v-btn large elevation="" color="">  Save</v-btn>
              
            </v-col>
          </v-row> -->

          </v-card>
        </v-container>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      height: {
        min: 200,
        max: 400,
        slider: 250,
      },
      width: {
        min: 200,
        max: 600,
        slider: 330,
      },
    };
  },
};
</script>

<style  scoped>

.v-text-field__suffix{
  color: #a509c5 !important;
}

/* .zarovnat-vpravo input {
  text-align: end !important;
}

*/
.v-text-field input {
    text-align:right !important;
} 

.v-text-field input {
  text-align: end !important;
}

</style>
